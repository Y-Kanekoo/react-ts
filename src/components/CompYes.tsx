import React from "react";

interface CompYesProps {
  onYes: (count: boolean) => void;
}

const CompYes: React.FC<CompYesProps> = ({ onYes }) => {
  const handleYes = () => {
    const count = true; // ここでは単純にtrueを設定
    console.log(`${count}`);
    onYes(count); // onYes関数を呼び出す
  };
  return (
    <div>
      押したボタン：ボタンを押してください
      <br />
      <button onClick={handleYes}>Yes</button>
    </div>
  );
};

export default CompYes;
