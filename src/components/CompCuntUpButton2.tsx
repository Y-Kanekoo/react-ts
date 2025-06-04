import React from "react";

interface CompSelfIntroductionProps {
  onCountUp: () => void;
  onCountDown: () => void;
}

const CompCuntUpButton2: React.FC<CompSelfIntroductionProps> = ({
  onCountUp,
  onCountDown,
}) => {
  //   const handleCountUp = () => {
  //     const incrementValue = 1; // カウントアップの値
  //     console.log(`${incrementValue}をカウントアップします`);
  //     onCountUp(incrementValue); // カウントアップの関数を呼び出す
  //   };

  //   const handleCountDown = () => {
  //     const decrementValue = -1; // カウントダウンの値
  //     console.log(`${decrementValue}をカウントダウンします`);
  //     onCountDown(decrementValue); // カウントダウンの関数を呼び出す
  //   };

  return (
    <div className="ex">
      <button onClick={onCountUp}>カウントアップ</button>
      <button onClick={onCountDown}>カウントダウン</button>
    </div>
  );
};

export default CompCuntUpButton2;
