import React from "react";

interface CompSelfIntroductionProps {
  myName?: string;
  myAge?: number;
  myHobby?: string;
}

const CompSelfIntroduction: React.FC<CompSelfIntroductionProps> = ({
  myName = "齋藤飛鳥",
  myAge = 26,
  myHobby = "読書",
}) => {
  return (
    <div>
      <div>こんにちは、{myName}さん！</div>
      <div>年齢：{myAge}</div>
      <div>趣味：{myHobby}</div>
    </div>
  );
};

export default CompSelfIntroduction;
