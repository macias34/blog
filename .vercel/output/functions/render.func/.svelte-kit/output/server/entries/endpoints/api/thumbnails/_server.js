import { e as error } from '../../../../chunks/index2.js';
import { p as proccessFile, s as supabase } from '../../../../chunks/supabase.js';
import { p as prisma } from '../../../../chunks/prisma.js';
import { a as authController } from '../../../../chunks/user.model.js';
import cuid from '@bugsnag/cuid';

const thumbnailsUrl = process.env.SUPABASE_THUMBNAILS_URL;

const POST = async ({ request, locals }) => {
  authController(locals);
  try {
    const { fileName, fileBase64 } = await proccessFile(request, "thumbnails");
    const uniqueFileName = cuid() + fileName;

    const thumbnailBuffer = Buffer.from(
      fileBase64.replace("data:", "").replace(/^.+,/, ""),
      "base64"
    );

    const { data, error: thumbnailUploadError } = await supabase.storage
      .from("blog-thumbnails")
      .upload(uniqueFileName, thumbnailBuffer, { contentType: "thumbnail" });

    if (thumbnailUploadError) {
      throw error(500, thumbnailUploadError.message);
    }

    const thumbnailUrl = thumbnailsUrl + data?.path;

    const thumbnail = await prisma.thumbnail.create({
      data: {
        thumbnail_url: thumbnailUrl,
        file_name: fileName,
      },
    });

    return new Response(JSON.stringify(thumbnail));
  } catch (err) {
    console.log(err);
    throw error(500, "Couldn't fetch the post.");
  }
};

export { POST };
