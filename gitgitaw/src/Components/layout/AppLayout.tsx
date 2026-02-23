import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

export default function AppLayout() {
    return(
        <div style={{display:"flex", minHeight: '100vh'}}>
            <Sidebar />
            <main style={{flex: 1, overflowY: 'auto'}}>
            <Outlet />
            </main>
        </div>
    )
}