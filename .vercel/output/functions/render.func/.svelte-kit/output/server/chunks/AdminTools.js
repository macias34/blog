const generateExcerpt = (description) => {
  if (description.length > 150) return description.substring(0, 150) + "...";
  return description;
};

function calculateAspectRatioFit(
  srcWidth,
  srcHeight,
  maxWidth,
  maxHeight
) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

export { calculateAspectRatioFit as c, generateExcerpt as g };
