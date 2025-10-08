import React from "react";
import { useState } from "react";

const tabList = [
  "Accounts",
  "Apps",
  "Campaigns",
  "Ad groups",
  "Ad group settins",
  "Keywords",
  "Search terms",
  "Negative keywords",
  "Ads",
  "CPP",
];

const Tabs = () => {
  const [active, setActive] = useState("Keywords");

  return (
    <div className="flex flex-wrap gap-5  text-sm text-gray-500">
      {tabList.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActive(tab)}
          className={`pb-2 border-b-2 transition-colors duration-200 ${
            active === tab
              ? "border-orange-500 text-black font-medium"
              : "border-transparent hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
