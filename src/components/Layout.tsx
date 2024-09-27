import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import "../styles/css/Layout.css";

export default function Layout() {
  return (
    <div className="container">
      <main>
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
