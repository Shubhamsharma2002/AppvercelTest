import { Plus } from "lucide-react";
import React, { useState } from "react";

const KeywordTable = () => {
  const [keywords, setKeywords] = useState([
    {
      id: 1,
      keyword: "[fyers]",
      cptBid: "$1.21",
      keywordType: "B",
      protection: true,
      deliveryStatus: "Running",
      adGroupName: "Competitor",
      active: true,
    },
    {
      id: 2,
      keyword: "[idfc first bank]",
      cptBid: "$1.21",
      keywordType: "B",
      protection: true,
      deliveryStatus: "Running",
      adGroupName: "Competitor",
      active: true,
    },
    {
      id: 3,
      keyword: "[kotak bank]",
      cptBid: "$1.21",
      keywordType: "B",
      protection: true,
      deliveryStatus: "Running",
      adGroupName: "Competitor",
      active: true,
    },
    {
      id: 4,
      keyword: "[kotak shares]",
      cptBid: "$1.21",
      keywordType: "B",
      protection: true,
      deliveryStatus: "Running",
      adGroupName: "Competitor",
      active: true,
    },
  ]);

  const toggleStatus = (id) => {
    setKeywords((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between gap-3 font-bold">
         <div className="flex gap-1" >
          <Plus size={20} color="#FF5900" />
          <ul className="flex gap-8" >
            <li>Actions</li>
            <li>Rules</li>
            <li>Quick Edits</li>
            <li>labels</li>
          </ul>
         </div>
         <div>
          <ul className="flex gap-8" >
            <li>Filter</li>
            <li>Colums</li>
          </ul>
         </div>
      </div>
      <div className="overflow-x-auto bg-white shadow rounded-xl border border-gray-200 mt-5">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Keyword</th>
              <th className="px-4 py-3 text-left">CPT bid</th>
              <th className="px-4 py-3 text-left">Keyword type</th>
              <th className="px-4 py-3 text-left">Protection</th>
              <th className="px-4 py-3 text-left">Delivery status</th>
              <th className="px-4 py-3 text-left">Ad group name</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                {/* Status Toggle */}
                <td className="px-4 py-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={item.active}
                      onChange={() => toggleStatus(item.id)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-400"></div>
                  </label>
                </td>

                {/* Keyword */}
                <td className="px-4 py-3">{item.keyword}</td>

                {/* CPT bid */}
                <td className="px-4 py-3">{item.cptBid}</td>

                {/* Keyword Type */}
                <td className="px-4 py-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded text-gray-600 font-medium">
                    {item.keywordType}
                  </span>
                </td>

                {/* Protection */}
                <td className="px-4 py-3">
                  {item.protection ? (
                    <span className="text-red-500">🛡️</span>
                  ) : (
                    "-"
                  )}
                </td>

                {/* Delivery Status */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                    <span>{item.deliveryStatus}</span>
                  </div>
                </td>

                {/* Ad group name */}
                <td className="px-4 py-3">{item.adGroupName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordTable;
