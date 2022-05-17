import React from "react";
import './App.css';
import ProgressForm from "./components/ProgressForm";
import ProgressTable from "./components/ProgressTable";

function App() {

  return (
    <div className="Appcontainer bg-slate-300">
      <h1 className="text-5xl  p-3 text-center font-bold underline">Fitness Tracker App</h1>

      <ProgressForm />        
      <ProgressTable />

    </div>
  );
}

export default App;