import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops Page not Found!!</h1>
      <h2>Something went wrong!!!!!</h2>
      <h3 style={{ color: "red" }}>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
