import { e as error } from '../../../../chunks/index2.js';
import { p as prisma } from '../../../../chunks/prisma.js';
import 'jsonwebtoken';
import dotenv from 'dotenv';
import { a as authController } from '../../../../chunks/user.model.js';

dotenv.config();
process.env.JWT_ACCESS_SECRET;

const GET = async ({ request, locals }) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        posts: true,
      },
    });

    if (!categories) throw error(500, "Couldn't fetch categories.");
    return new Response(JSON.stringify(categories));
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

const POST = async ({ request, locals }) => {
  authController(locals);
  try {
    const body = await request.json();
    const { label, color } = body;
    const category = await prisma.category.create({
      data: {
        label,
        color,
      },
    });

    return new Response(
      JSON.stringify({ message: "Category added successfuly." })
    );
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

export { GET, POST };
