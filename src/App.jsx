import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./layouts";
import routes from "./routers";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/blogs" />} />
        {routes.map((route) => {
          return <Route key={route.path} {...route} path={route.path} element={route.element()} />;
        })}
      </Routes>
    </Layout>
  );
};
export default App;
