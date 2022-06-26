import React from "react";
import "./App.css"
import ProgressForm from "./components/ProgressForm";
import ProgressTable from "./components/ProgressTable";

function App() {

  return (
    <div className="bg-zinc-800">
      <h1 className="text-5xl  p-3 text-center font-bold underline text-zinc-50">Fitness Tracker App</h1>
      
      <div className="flex py-5">
        <ProgressForm className="w-2/5 "/>        
        <ProgressTable className="w-3/5 "/>
      </div>
    </div>
  );
}

export default App;