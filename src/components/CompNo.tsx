import React from "react";

interface CompNoProps {
  onNo?: (value: boolean) => void;
}

const CompNo: React.FC<CompNoProps> = ({ onNo }) => {
  const handleNo = () => {
    const count = false; // ここでは単純にfalseを設定
    console.log(`${count}`);
    if (onNo) {
      onNo(count); // onNo関数を呼び出す
    }
  };

  return (
    <div>
      <button onClick={handleNo}>No</button>
    </div>
  );
};
export default CompNo;
