import {useState} from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  return (
		<>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
      <main className="w-full">
        <Navbar 
          setIsSidebarOpen={setIsSidebarOpen} 
          isSidebarOpen={isSidebarOpen}
        />
        <Outlet />
      </main>
		</>
	);
};

export default Layout;
