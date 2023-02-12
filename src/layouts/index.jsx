import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "react-bootstrap";

const Layout = (props) => {
  const { children } = props;

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Suspense fallback={<p>Page Loading...</p>}>
        <main>{children}</main>
      </Suspense>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
