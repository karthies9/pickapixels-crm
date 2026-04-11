
import { useStore } from "./store/useStore.js";

export default function Dashboard(){
  const {leads}=useStore();
  return <div>Total Leads: {leads.length}</div>
}
