
import { useStore } from "../store/useStore";

export default function Dashboard(){
  const {leads}=useStore();
  return <div>Total Leads: {leads.length}</div>
}
