import { proccessFile, saveFile } from "$lib/Server/files";
import { calculateAspectRatioFit } from "$lib/Helpers/AdminTools";
import { error } from "@sveltejs/kit";
import { prisma } from "$lib/Server/prisma";
import Jimp from "jimp";
import { authController } from "$lib/Server/user.model";
import { supabase } from "$lib/Server/supabase";
import cuid from "@bugsnag/cuid";

const imagesUrl = process.env.SUPABASE_IMAGES_URL;

export async function POST({ request, locals }) {
  authController(locals);
  try {
    const { fileName, fileBase64 } = await proccessFile(request, "images");

    const uniqueFileName = cuid() + fileName;

    const duplicated = await prisma.img.findUnique({
      where: {
        file_name: uniqueFileName,
      },
    });

    if (duplicated) return new Response(JSON.stringify(duplicated));

    const imageBuffer = Buffer.from(
      fileBase64.replace("data:", "").replace(/^.+,/, ""),
      "base64"
    );

    const { data, error: imageUploadError } = await supabase.storage
      .from("blog-images")
      .upload(uniqueFileName, imageBuffer, { contentType: "image" });

    if (imageUploadError) {
      throw error(500, imageUploadError.message);
    }

    const imageUrl = imagesUrl + data?.path;
    const imageMetaData = await Jimp.read(imageUrl);

    const dimensions = calculateAspectRatioFit(
      imageMetaData.bitmap.width,
      imageMetaData.bitmap.height,
      512,
      512
    );

    const image = await prisma.img.create({
      data: {
        url: imageUrl,
        file_name: uniqueFileName,
        height: Math.floor(dimensions.height),
        width: Math.floor(dimensions.width),
      },
    });

    return new Response(JSON.stringify(image));
  } catch (err) {
    console.log(err);
    throw error(500, "Couldn't fetch the post.");
  }
}
