import React from "react";
import CompSelfIntroduction from "../components/CompSelfIntroduction";

const Ex140: React.FC = () => {
  return (
    <div className="compSample">
      <CompSelfIntroduction myName="西野七瀬" myAge={31} myHobby="ゲーム" />
      <hr />
      <CompSelfIntroduction myName="白石麻衣" myAge={32} myHobby="旅行" />
      <hr />
      <CompSelfIntroduction />
    </div>
  );
};

export default Ex140;
