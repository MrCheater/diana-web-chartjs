const colors = [
  "#49649f",
  "#3094f1",
  "#88bf49",
  "#ad8900",
  "#7f2494",
  "#dd4acc",
  "#f43a37",
  "#8b5413",
  "#3a9a24",
  "#167681",
];

const getRandomColor = (index) => {
  return colors[index % colors.length];
};

export default getRandomColor;
