import React from "react";
import CompCuntUpButton2 from "../components/CompCuntUpButton2";

const Ex170: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);
  const handleCountUp2 = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleCountDown2 = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <p>現在のカウント: {count}</p>
      <CompCuntUpButton2
        onCountUp={handleCountUp2}
        onCountDown={handleCountDown2}
      />
      <CompCuntUpButton2
        onCountUp={handleCountUp2}
        onCountDown={handleCountDown2}
      />
    </div>
  );
};

export default Ex170;
