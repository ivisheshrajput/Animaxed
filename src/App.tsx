// import { BrowserRouter, Routes,Route } from "react-router-dom";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Shimmer from "./pages/Shimmer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));

const App = () => {
  return (
    <div className="bg-primary-color font-PoppinsRegular w-full h-screen">
      <Suspense fallback={<Shimmer />}>
        <Topbar />
        <Outlet />
        {/* <Sidebar /> */}
      </Suspense>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;
