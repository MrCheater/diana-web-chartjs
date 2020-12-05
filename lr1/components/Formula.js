const Formula = ({ A, B, C, index }) => {
  return (
    <div className="formula">
      f<sub>{index}</sub>(x) = {A} * x<sup>2</sup> ({B} * e<sup>-2x</sup>){" "}
      {C < 0 ? "+" : "-"} {Number.isInteger(C) ? Math.abs(C) : C}
    </div>
  );
};

export default Formula;
