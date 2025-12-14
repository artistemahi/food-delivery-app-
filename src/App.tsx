import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about";

const Applayout: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <Body />
      <Footer />
    </div>
  );
};
const appRoutes: any = createBrowserRouter([
  { path: "/", element: <Applayout /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Applayout /> },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={appRoutes}/>);
