import React from "react";

interface CompNo {
  onNo?: () => void;
}

const CompNo: React.FC<CompNoProgs> = (onNo) => {

    const handleNo = () => {
    const count = false; // ここでは単純にfalseを設定
    console.log(`${count}`);
    onNo(count); // onNo関数を呼び出す
  return (
    <div>
       
        <button onClick={handleNo}>No</button>
    </div>
  );
};

export default CompNo;
