const getScaleRange = ({ datasets, scaleX, scaleY }) => {
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  for (const { data } of datasets) {
    for (const { x, y } of data) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
  minX *= scaleX;
  maxX *= scaleX;
  minY *= scaleY;
  maxY *= scaleY;
  return {
    minX,
    maxX,
    minY,
    maxY,
  };
};

export default getScaleRange;
