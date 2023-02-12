import React from "react";
import Blogs from "../pages/Blog/Index";
import BlogDetail from "../pages/Blog/Detail";

const routes = [
  {
    path: "/blogs",
    exact: true,
    element: Blogs,
  },
  {
    path: "/blogs/:blogId",
    exact: true,
    element: BlogDetail,
  },
  {
    path: "*",
    element: () => <h2>Page Not Found</h2>,
  },
];

export default routes;
