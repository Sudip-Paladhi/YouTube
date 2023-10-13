import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
    path : "/",
    element : <Body/>,
    children : [
        {
            path : "/",
            element : <MainContainer />,
        },

        {
            path : "watch",
            element : <WatchPage />,
        },
    ],
}])

const AppLayout = () => {
return (
    <Provider store={store}>
    <>
    <Header />
    <RouterProvider router={appRouter} />
    </>
    </Provider>
);
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


