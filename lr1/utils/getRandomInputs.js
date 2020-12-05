import getRandomColor from "./getRandomColor";

const getRandomInputs = () => {
  const A =
    (Math.random() > 0.5 ? 1 : -1) * (1 + Math.round(Math.random() * 8));
  const B =
    (Math.random() > 0.5 ? 1 : -1) * (1 + Math.round(Math.random() * 8));
  const C =
    (Math.random() > 0.5 ? 1 : -1) * (1 + Math.round(Math.random() * 8));
  return {
    A,
    B,
    C,
    Color: getRandomColor(Math.round(Math.random() * 1000)),
  };
};

export default getRandomInputs;
