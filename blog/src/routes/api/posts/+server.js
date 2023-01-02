import { error } from "@sveltejs/kit";
import { sanitizePostUrl } from "$lib/Server/sanitize";
import { prisma } from "$lib/Server/prisma";

export const GET = async () => {
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
    throw error(500, err);
  }
};

export const POST = async ({ request }) => {
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
    throw error(500, err);
  }
};
