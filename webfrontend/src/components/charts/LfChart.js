import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { chartsAction } from "../../actions/chartActions";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const LfChart = ({ labels, values }) => {
  // const dispatch = useDispatch();
  // const chartValues = useSelector((state) => state.chartValues);
  // const { charts } = chartValues;

  // useEffect(() => {
  //   dispatch(chartsAction());
  // }, [dispatch]);

  return (
    <div>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Lymphatic Filariasis",

              data: values,
              // backgroundColor:['red']
              backgroundColor: "#333366",
            },
          ],
        }}
        type="bar"
        width={600}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default LfChart;
