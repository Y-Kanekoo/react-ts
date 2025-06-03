import React from "react";

const Sample01: React.FC = () => {
  const message = "Hello React";
  const greet = "こんにちは";

  return (
    <div>
      <h1>{message}</h1>
      <p>{greet}</p>
    </div>
  );
};
export default Sample01;
