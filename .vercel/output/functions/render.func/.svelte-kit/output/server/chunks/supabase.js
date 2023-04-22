import 'fs';
import { createClient } from '@supabase/supabase-js';

const proccessFile = async (request, fileType) => {
  const data = await request.formData();
  const file = await data.get(fileType).arrayBuffer();
  const fileName = data.get("fileName");
  const filePath = data.get("filePath");
  const fileBase64 = Buffer.from(file).toString("base64");

  const siteURL = await request.headers.get("origin");
  const fileSrc = siteURL + `/api/${fileType}/${fileName}`;

  return {
    fileBase64,
    fileName,
    filePath,
    fileSrc,
  };
};

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_PUBLIC
);

export { proccessFile as p, supabase as s };
