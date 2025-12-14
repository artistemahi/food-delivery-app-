import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";

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
  { path: "/", element: <Applayout />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={appRoutes} />);
