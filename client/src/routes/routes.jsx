import { createBrowserRouter } from "react-router-dom";
import Survey from "../pages/Survey";
import FormVoting from "../pages/FormVoting";
import Homepage from "../pages/Homepage";
import Result from "../pages/Result";

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
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
