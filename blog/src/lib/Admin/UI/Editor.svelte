<script>
  import { POST, FILEPOST } from "$lib/Helpers/Requests";
  import {
    sanatizeFile,
    calculateAspectRatioFit,
  } from "$lib/Helpers/AdminTools";
  import { onMount } from "svelte";

  export let description = "";
  export let toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["link", "blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
    ["link", "image"],
  ];

  let editor;
  export let images = [];

  const url = "/api/images/upload";

  const setImgAttributes = async (
    imgUrl = "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
    imgHeight,
    imgWidth
  ) => {
    setTimeout(async () => {
      const imgs = Array.from(editor.querySelectorAll("img"));
      const img = imgs.filter(
        (img) => img.getAttribute("src") == "undefined"
      )[0];

      img.src = imgUrl;

      const dimensions = calculateAspectRatioFit(imgWidth, imgHeight, 512, 512);
      img.setAttribute("height", dimensions.height);
      img.setAttribute("width", dimensions.width);
    }, 0);
  };

  onMount(async () => {
    try {
      const { Quill } = await import("./Quill");
      let quill = new Quill(editor, {
        modules: {
          toolbar: toolbarOptions,
          imageUploader: {
            upload: async (image) => {
              image = sanatizeFile(image);
              const formData = new FormData();
              formData.append("images", image);
              formData.append("fileName", image.name);
              const img = await FILEPOST(url, formData)
                .then((res) => res.json())
                .then((res) => {
                  return {
                    id: res.img_id,
                    url: res.url,
                    height: res.height,
                    width: res.width,
                  };
                });

              setImgAttributes(img.url, img.height, img.width);
              images = [...images, img.id];
              // setTimeout(() => {}, 1);
            },
          },
        },
        theme: "snow",
        placeholder: "Write your story...",
      });

      quill.clipboard.dangerouslyPasteHTML(0, description);

      quill.on("text-change", () => {
        description = quill.root.innerHTML;
      });

      const fontSizeArr = [
        "8px",
        "9px",
        "10px",
        "12px",
        "14px",
        "16px",
        "20px",
        "24px",
        "32px",
        "42px",
        "54px",
        "68px",
        "84px",
        "98px",
      ];
    } catch (error) {
      console.log(error);
    }

    // var Size = quill.import("attributors/style/size");
    // Size.whitelist = fontSizeArr;
    // quill.register(Size, true);
  });
</script>

<div class="quill">
  <div bind:this={editor} />
</div>

<style lang="scss">
  @import "./styles/quill.snow.css";
  .quill {
    width: 75%;
    height: 85%;
    color: white;
  }
</style>
