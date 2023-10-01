import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
const AppLayout = () => {
return (
    <>
    <Header />
    <Sidebar />
    </>
);
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


