import React, { useState } from "react";

const Ex50: React.FC = () => {
  const [isEnabled, setEnabled] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(true);

  const handleClick = () => {
    setEnabled(!isEnabled);
    setDisabled(!isDisabled);
  };

  return (
    <div>
      <span>
        <button type="button" disabled={isDisabled}>
          押せるボタン
        </button>
        <button type="button" disabled={isEnabled}>
          押せないボタン
        </button>
      </span>
      <hr />
      チェックされているラジオボタン：
      <input type="radio" name="radio" id="radio" checked={isEnabled} />/
      チェックされていないラジオボタン：
      <input type="radio" name="radio" id="radio" checked={isDisabled} />
      <hr />
      <label>
        チェックされているチェックボックス
        <input
          type="checkbox"
          name="checkbox"
          id="cekbox"
          checked={isEnabled}
        />
      </label>
      /
      <label>
        チェックされていないチェックボックス
        <input
          type="checkbox"
          name="checkbox"
          id="cekbox"
          checked={isDisabled}
        />
      </label>
      <hr />
      <button type="button" onClick={handleClick}>
        ふるまいを反転させる
      </button>
    </div>
  );
};

export default Ex50;
