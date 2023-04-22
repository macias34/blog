import '../../../../../chunks/prisma.js';
import { e as error } from '../../../../../chunks/index2.js';
import fs from 'fs';

const thumbnailsPath = "./uploads/thumbnails/";

const GET = async ({ params }) => {
  try {
    const fileName = params.thumbnailName;
    const fileStream = await fs.createReadStream(thumbnailsPath + fileName);

    return new Response(fileStream);
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

export { GET };
