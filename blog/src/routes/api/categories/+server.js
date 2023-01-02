import { error } from "@sveltejs/kit";
import { sanitizePostUrl } from "$lib/Server/sanitize";
import { prisma } from "$lib/Server/prisma";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        posts: true,
      },
    });

    if (!categories) throw error(500, "Couldn't fetch categories.");
    return new Response(JSON.stringify(categories));
  } catch (err) {
    throw error(500, err);
  }
};

export const POST = async ({ request }) => {
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
    throw error(500, err);
  }
};
