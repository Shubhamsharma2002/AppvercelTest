import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Tabs from "./components/Tabs";
import Herosection from "./components/herosection";
import SummaryCards from "./components/summarycard";
import KeywordTable from "./components/KeywordTable";


function App() {
   return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1  ">
        <Header />
        <Tabs/>
        <Herosection/>
        <SummaryCards/>
        <KeywordTable/>
      </main>
    </div>
  );
}

export default App;
