import React from "react";

const CompMyName: React.FC = () => {
  const [myname, setMyName] = React.useState<string>("齋藤飛鳥");

  const changeMyName = () => {
    setMyName("西野七瀬");
  };

  return (
    <div className="answer">
      私の名前は{myname}です。
      <button onClick={changeMyName}> 名前変更</button>
    </div>
  );
};

export default CompMyName;
