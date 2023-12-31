import { createBrowserRouter } from "react-router-dom";

// views
import AboutUs from "../views/AboutUs";
import Result from "../views/Result";
import GetById from "../views/GetById";
import FrontEnd from "../views/FrontEnd";
import Home from "../views/Home"
import QuizLayout from "../views/QuizLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/front-end-development",
    element: <FrontEnd />,
  },
  {
    path: "/quiz",
    element: <QuizLayout />,
  },
  {
    path: "/result",
    element: <Result />,
  },

  {
    path: "/get-by-id/:id",
    element: <GetById />,
  },
]);



export default router;