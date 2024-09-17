import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Home";
import ShowHistory from "../components/ShowHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/history/:cat',
        element: <ShowHistory />,
        loader: ({params})=> fetch(`http://localhost:9988/api/money-manage/${params.cat}`)
      }
    ],
  },
]);
export default router;
