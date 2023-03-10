export function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

export const generateExcerpt = (description) => {
  if (description.length > 150) return description.substring(0, 150) + "...";
  return description;
};

export function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {};
  reader.onerror = function (error) {};
}

export const sanatizeFile = (file) => {
  const fileName = file.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_")
    .toLowerCase();

  const sanatizedFile = new File([file], fileName, { type: file.type });
  return sanatizedFile;
};

export function calculateAspectRatioFit(
  srcWidth,
  srcHeight,
  maxWidth,
  maxHeight
) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}
