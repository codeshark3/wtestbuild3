import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chartsAction } from "../../actions/chartActions";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const OnchoChart = ({ labels, values }) => {
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
              label: "Onchocerciasis",

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

export default OnchoChart;

// import React from "react";
// import Chart from "react-apexcharts";
// const OnchoChart = () => {
//   const options = {
//     chart: {
//       id: "basic-bar",
//     },
//     responsive: [
//       {
//         breakpoint: 1000,
//       },
//     ],
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//     },
//   };
//   const series = [
//     {
//       name: "series-1",
//       data: [30, 40, 45, 50, 49, 60, 70, 91],
//     },
//   ];

//   return (
//     <Chart
//       options={options}
//       series={series}
//       type="bar"
//       width="100%"
//       height="100%"
//     />
//   );
// };

// export default OnchoChart;
