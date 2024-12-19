import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Work from "./pages/Work";
import Info from "./pages/Info";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
      <Analytics/>
    </div>
  );
}
