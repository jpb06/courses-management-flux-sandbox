import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <h2>Page not found</h2>
      <Link to="/">Back to home</Link>
    </>
  );
};

export default NotFoundPage;
