const getFormulaValues = ({ A, B, C }) => {
  const values = [];
  for (let i = -1; i <= 1; i += 0.1) {
    const x = i;
    const y = A * Math.pow(x, 2) * (B * Math.pow(Math.E, -2 * x)) - C;
    values.push({ x, y });
  }
  return values;
};

export default getFormulaValues;
