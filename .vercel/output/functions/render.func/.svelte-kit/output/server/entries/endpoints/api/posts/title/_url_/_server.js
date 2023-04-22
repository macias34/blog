import { e as error } from '../../../../../../chunks/index2.js';
import { p as prisma } from '../../../../../../chunks/prisma.js';

const GET = async ({ params }) => {
  const post_url = params.url;

  const post = await prisma.post.findFirst({
    where: {
      url: post_url,
    },
    include: {
      categories: true,
      thumbnail: true,
    },
  });

  if (!post) throw error(500, `Couldn't fetch post with URL : ${post_url}`);

  return new Response(JSON.stringify(post));
};

export { GET };
