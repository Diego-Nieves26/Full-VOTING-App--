import { createBrowserRouter } from "react-router-dom";
import FormVoting from "../pages/FormVoting";
import Homepage from "../pages/Homepage";
import Result from "../pages/Result";
import Survey from "../pages/Survey";

export default createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Homepage />,
      },

      {
        path: "/polls/new",
        element: <FormVoting />,
      },
      {
        path: "/polls/:id",
        element: <Survey />,
      },
      {
        path: "/result/:id",
        element: <Result />,
      },
    ],
  },
]);
