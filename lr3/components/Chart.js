import React, { useRef, useEffect } from "react";
import ChartJS from "chart.js";

import getFormulaValues from "../utils/getFormulaValues";
import getScaleRange from "../utils/getScaleRange";

const Chart = ({ formulas, scaleX, scaleY }) => {
  const ref = useRef(null);
  let chart;
  useEffect(() => {
    if (chart == null) {
      const datasets = formulas.map(({ A, B, C, Color, index }) => ({
        label: `f${index + 1}`,
        data: getFormulaValues({ A, B, C }),
        borderColor: Color,
        fill: "none",
      }));
      const { minX, maxX, minY, maxY } = getScaleRange({
        datasets,
        scaleX,
        scaleY,
      });
      chart = new ChartJS(ref.current, {
        type: "line",
        data: {
          datasets,
        },
        options: {
          animation: {
            duration: 0,
          },
          tooltips: {
            enabled: false,
          },
          legend: {
            display: true,
            position: "bottom",
          },

          scales: {
            xAxes: [
              {
                type: "linear",
                position: "bottom",
                ticks: {
                  max: maxX,
                  min: minX,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  max: maxY,
                  min: minY,
                },
              },
            ],
          },
        },
      });
    } else {
      chart.update();
    }
  });

  return (
    <div>
      <canvas ref={ref} />
    </div>
  );
};

export default Chart;
