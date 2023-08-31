import React from "react";

export const Container = (prop) => {
    console.log(prop);
    return <div className="container py-5">{prop.children}</div>;
}

