import React from "react";

export const Container = (prop) => { 
  return (
    <div className={"container py-5 " + prop.className}>{prop.children}</div>
  );
};
