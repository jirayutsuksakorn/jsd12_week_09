import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productID",
        element: <ProductsDetail />,
      },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}

