import Navbar from "@/components/navbar";
import React from "react";

const CommodityLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default CommodityLayout;
