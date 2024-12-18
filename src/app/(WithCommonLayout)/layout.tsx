import { Navbar } from "@/src/components/UI/navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default layout;
