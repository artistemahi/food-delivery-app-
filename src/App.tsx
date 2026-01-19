import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense, lazy } from "react";
import UserContext from "./utils/UserContext";
import User from "./components/User";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"
import { useLocation } from "react-router";



const LazyGrocery = lazy(() => import("./components/Grocery"));

const Applayout: React.FC = () => {
  const location = useLocation();
  const hideLayoutRoutes = ["/about", "/contact", "/grocery"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);


  const [userName, setUserName] = useState<string>();
  //authentication
  useEffect(() => {
    //API call to check if user is logged in
    const data = { name: "Mahesh kumar" };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <UserContext.Provider value={{ loggedInUser: "Keshav" }}>
            {!hideLayout  && <Header />}
          </UserContext.Provider>
          <Outlet />
          {!hideLayout && <Footer />}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRoutes: any = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:menuId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyGrocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={appRoutes} />);
