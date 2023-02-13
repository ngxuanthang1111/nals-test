import React from "react";
import Blogs from "../pages/Blog/Index";
import BlogCreateEdit from "../pages/Blog/CreateEdit";
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
    path: "/blogs/create",
    exact: true,
    element: BlogCreateEdit,
  },
  {
    path: "/blogs/:blogId/edit",
    exact: true,
    element: BlogCreateEdit,
  },
  {
    path: "*",
    element: () => <h2>Page Not Found</h2>,
  },
];

export default routes;
