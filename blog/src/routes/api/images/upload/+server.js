import { error } from "@sveltejs/kit";
import { proccessFile, saveFile } from "$lib/Server/files";
import { prisma } from "$lib/Server/prisma";
import path from "path";
import { promisify } from "util";
import sizeOf from "image-size";

const getDimensions = promisify(sizeOf);

const imagesPath = ".././post_imgs/";

export async function POST({ request }) {
  try {
    const { fileName, fileBase64, fileSrc } = await proccessFile(
      request,
      "images"
    );

    const filePath = path.join(imagesPath, fileName);

    const duplicated = await prisma.img.findUnique({
      where: {
        url: fileSrc,
      },
    });

    if (duplicated) return new Response(JSON.stringify(duplicated));

    await saveFile(filePath, fileBase64);
    // const dimensions = await getDimensions(filePath);

    // const height = dimensions.height;
    // const width = dimensions.width;

    const image = await prisma.img.create({
      data: {
        url: fileSrc,
        file_name: fileName,
        height: 700,
        width: 350,
      },
    });

    return new Response(JSON.stringify(image));
  } catch (err) {
    console.log(err);
    throw error(500, "Couldn't fetch the post.");
  }
}
