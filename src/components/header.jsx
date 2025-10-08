import { Calendar1 } from "lucide-react";
import React from "react";

import { useState } from "react";

export default function Header() {
 
  const [dateRange, setDateRange] = useState("Jul 5 - Jul 11, 2025");

  return (
    <header className="flex items-center justify-between bg-white  px-3 py-3 ">
      <div>
        <h1 className="text-xl font-bold">All ad accounts</h1>
      </div>
      <div className="px-3 py-2 text-sm cursor-pointer flex  gap-1"
          onClick={() => setDateRange("Jul 1 - Jul 7, 2025")}>
        <Calendar1  className="h-10 w-10"/>
      <div>
          <span className="text-gray-400">Last 7 Days</span> <br />
          <span className="text-gray-800">{dateRange}</span>
        </div>
      </div>
  
    </header>
  );
}
