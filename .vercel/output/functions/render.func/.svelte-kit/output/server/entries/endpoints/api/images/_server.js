import { e as error } from '../../../../chunks/index2.js';
import 'fs';
import { p as prisma } from '../../../../chunks/prisma.js';

const GET = async () => {
  try {
    const imgs = await prisma.img.findMany();

    return new Response(JSON.stringify(imgs));
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

export { GET };
