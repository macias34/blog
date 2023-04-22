import { e as error } from '../../../../../chunks/index2.js';
import { s as sanitizePostUrl } from '../../../../../chunks/sanitize.js';
import { p as prisma } from '../../../../../chunks/prisma.js';
import { a as authController } from '../../../../../chunks/user.model.js';

const GET = async ({ params }) => {
  const post_id = parseInt(params.id);
  try {
    const post = await prisma.post.findUnique({
      where: {
        post_id,
      },
      include: {
        categories: true,
        thumbnail: true,
      },
    });

    if (!post) throw error(500, "Couldn't fetch the post.");
    return new Response(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    throw error(500, "Couldn't fetch the post.");
  }
};

const PUT = async ({ request, params, locals }) => {
  authController(locals);
  try {
    const body = await request.json();
    let { title, description, thumbnail_id, categories } = body;
    thumbnail_id = parseInt(thumbnail_id);
    const post_id = parseInt(params.id);
    const url = sanitizePostUrl(title);

    const post = await prisma.post.update({
      where: { post_id },
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
          deleteMany: {},
          createMany: {
            data: categories,
          },
        },
      },
    });
    return new Response(
      JSON.stringify({ message: "Post updated succesfully." })
    );
  } catch (err) {
    console.log(err);
    throw error(500, "Failed to update the post.");
  }
};

const DELETE = async ({ params, locals }) => {
  authController(locals);
  const post_id = parseInt(params.id);

  try {
    // Deletes connection between post and categories
    await prisma.post.update({
      where: {
        post_id,
      },
      data: {
        categories: {
          deleteMany: {},
        },
      },
    });

    // Delete post from db
    await prisma.post.delete({
      where: {
        post_id,
      },
    });

    return new Response(
      JSON.stringify({ message: "Post deleted succesfully." })
    );
  } catch (err) {
    console.log(err);
    throw error(500, "Couldn't delete the post.");
  }
};

export { DELETE, GET, PUT };
