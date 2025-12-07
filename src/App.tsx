import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Applayout: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Applayout />);
