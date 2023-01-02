const { default: imageUploader } = await import("quill-image-uploader");
export const { default: Quill } = await import("quill");
Quill.register("modules/imageUploader", imageUploader);
