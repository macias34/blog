import { prisma } from "$lib/Server/prisma";
import { error } from "@sveltejs/kit";
import fs from "fs";

const thumbnailsPath = "./uploads/thumbnails/";

export const GET = async ({ params }) => {
  try {
    const fileName = params.thumbnailName;
    const fileStream = await fs.createReadStream(thumbnailsPath + fileName);

    return new Response(fileStream);
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};
