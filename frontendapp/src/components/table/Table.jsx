import React from "react";

export function MyTable({ children }) {
  return (
    <table className="mt-4 table table-bordered table-active table-striped border-secondary table-secondary text-center table-hover table-responsive"
      
    >
      {children}
    </table>
  );
}
