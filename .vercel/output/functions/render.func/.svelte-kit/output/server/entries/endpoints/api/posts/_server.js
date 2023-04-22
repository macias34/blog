import { e as error } from '../../../../chunks/index2.js';
import { s as sanitizePostUrl } from '../../../../chunks/sanitize.js';
import { p as prisma } from '../../../../chunks/prisma.js';
import { a as authController } from '../../../../chunks/user.model.js';

const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        categories: true,
        thumbnail: true,
      },
    });

    if (!posts) throw error(500, "Couldn't fetch posts");
    return new Response(JSON.stringify(posts));
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

const POST = async ({ request, locals }) => {
  authController(locals);
  try {
    const body = await request.json();
    let { title, description, thumbnail_id, categories } = body;
    thumbnail_id = parseInt(thumbnail_id);
    const url = sanitizePostUrl(title);

    const post = await prisma.post.create({
      data: {
        title,
        url,
        description,
        thumbnail: {
          connect: {
            thumbnail_id,
          },
        },

        categories: {
          createMany: {
            data: categories,
          },
        },
      },
    });
    return new Response(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    throw error(500, err);
  }
};

export { GET, POST };
