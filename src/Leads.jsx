
import { useState } from "react";
import { useStore } from "./store/useStore.js";

export default function Leads(){
  const {leads,setLeads}=useStore();
  const [name,setName]=useState("");

  function add(){
    if(!name) return;
    setLeads([{name},...leads]);
    setName("");
  }

  return (
    <div>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <button onClick={add}>Add</button>
      {leads.map((l,i)=><div key={i}>{l.name}</div>)}
    </div>
  )
}
