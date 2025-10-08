import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChevronDown } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function TrendsChart() {
  const trends = useSelector((state) => state.trends);

  const data = {
    labels: trends.labels,
    datasets: [
      {
        label: "Spend",
        data: trends.data,
        borderColor: "#F97316",
        backgroundColor: "rgba(249,115,22,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  return (
    <>
    <div className="flex gap-2">
        <ChevronDown/>

      <h1 className="text-gray-800 font-bold ">Chart</h1>
      </div>
      <div className="bg-white ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Spend</h2>
      </div>
      <Line data={data} options={options} height={90} />
      <div className="flex items-center mt-3">
        <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
        <span className="text-xs text-gray-600">India</span>
      </div>
    </div>
    </>
    
  );
}
