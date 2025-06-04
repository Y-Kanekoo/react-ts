import React from "react";
import CompYes from "../components/CompYes";
import CompNo from "../components/CompNo";
import { useState } from "react";

const ComponentName: React.FC = () => {
  const [isYes, setIsYes] = useState<boolean>(true);
  const handleYes = (count: boolean) => {
    console.log(`Yesボタンが押されました: ${count}`);
    setIsYes(count);
  };
  const handleNo = (count: boolean) => {
    console.log(`Noボタンが押されました: ${count}`);
    setIsYes(count);
  };

  return (
    <div>
      <h1>Ex180</h1>
      <p>押したボタン：{isYes ? "Yes" : "No"}</p>
      <CompYes onYes={handleYes} />
      <CompNo onNo={handleNo} />
    </div>
  );
};

export default ComponentName;
