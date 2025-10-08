import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import TrendsChart from "./TrendsChart";
import { ChevronDown } from "lucide-react";

export default function SummaryCards() {
  const summary = useSelector((state) => state.summary);

  return (
    <div className="gap-5 mt-5">
      <div className="flex gap-2">
        <ChevronDown/>
      <h1 className="text-gray-800 font-bold ">Total summary</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-6">
        {summary.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
          >
            <p className="text-xs text-gray-500">{item.title}</p>
            <h2 className="text-lg font-bold">{item.value}</h2>
            <span
              className={`text-sm ${
                item.change.includes("+") ? "text-green-600" : "text-gray-400"
              }`}
            >
              {item.change}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-md p-5 mt-6 w-full md:h-100 max-w-full overflow-hidden">
        <TrendsChart />
      </div>
    </div>
  );
}
