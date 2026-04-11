
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";

export default function App(){
  const [page,setPage]=useState("home");
  return (
    <div style={{padding:20}}>
      <h2>Pickapixels CRM</h2>
      {page==="home" && <Dashboard/>}
      {page==="leads" && <Leads/>}
      <div style={{position:"fixed",bottom:0}}>
        <button onClick={()=>setPage("home")}>Home</button>
        <button onClick={()=>setPage("leads")}>Leads</button>
      </div>
    </div>
  )
}
