import React, { useState } from "react";

const S30onClickEvent: React.FC = () => {
  const [myName, setMyName] = useState<string>("");

  // handle という接頭辞を使うことで、「この関数はイベントをハンドルするためのものだ」という意図が明確になります。
  // React のコミュニティでは、イベントハンドラーに handle という接頭辞を使うことが一般的です。
  // この命名規則に従うことで、コードの統一感を保ち、他の開発者がコードを読みやすくすることができます。
  const handleClick = () => {
    setMyName("山田太郎");
  };

  return (
    <div className="sample">
      <button type="button" onClick={handleClick}>
        名前を表示する
      </button>
      <p>{myName}</p>
    </div>
  );
};

export default S30onClickEvent;
