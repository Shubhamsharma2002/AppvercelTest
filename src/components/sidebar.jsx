import React, { useState } from "react";
import {
  CircleStop,
  Zap,
  SettingsIcon,
  CircleQuestionMark,
  UserRoundPen,
  Blocks,
  Search,
  Clock9,
  ImagePlus,
} from "lucide-react"; // icons (lucide-react install karo)

export default function Sidebar() {
  return (
    <aside className="h-screen w-16 md:w-30 bg-white  ">
      <div className="md:w-20 bg-[#FF5900] flex flex-col gap-30 items-center ">
        <div className="mt-8 flex flex-col gap-5">
          <CircleStop size={20} color="white" />
          <Search size={20} color="white" />
          <Clock9 size={20} color="white" />
          <ImagePlus size={20} color="white" />
          <Zap size={20} color="white" />
          <SettingsIcon size={20} color="white" />
          <Blocks size={20} color="white" />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <SettingsIcon size={20} color="white" />
          <CircleQuestionMark size={20} color="white" />
          <UserRoundPen size={20} color="white" />
        </div>
      </div>
    </aside>
  );
}
