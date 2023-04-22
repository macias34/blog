import { p as prisma } from '../../../../../chunks/prisma.js';
import { a as authController } from '../../../../../chunks/user.model.js';
import { e as error } from '../../../../../chunks/index2.js';
import fs from 'fs';

const imagesPath = "./uploads/post_imgs/";

const GET = async ({ params }) => {
  try {
    const fileName = params.imageName;
    const fileStream = await fs.createReadStream(imagesPath + fileName);

    return new Response(fileStream);
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

const DELETE = async ({ params, locals }) => {
  authController(locals);
  try {
    const fileName = params.imageName;
    await prisma.img.delete({
      where: {
        file_name: fileName,
      },
    });
    return new Response(
      JSON.stringify({ message: "Post deleted successfuly;" })
    );
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

export { DELETE, GET };
