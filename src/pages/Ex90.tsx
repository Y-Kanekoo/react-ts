import React, { useState } from "react";

const Ex90: React.FC = () => {
  const [isRobot, setIsRobot] = useState<boolean>(false); // ロボットチェック

  const handleRobotChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRobot(event.target.checked);
  };

  const handleChange = () => {
    if (isRobot) {
      return (
        <div>
          <h2>人間ではありません。</h2>
          <p>ロボットです。</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>人間です。</h2>
          <p>ロボットではありません。</p>
        </div>
      );
    }
  };

  return (
    <div>
      私はロボットではありません。
      <label htmlFor="isRobot"></label>
      <input
        type="checkbox"
        name="robbot"
        id="robbot"
        checked={isRobot}
        onChange={handleRobotChange}
      />
      /<span>{isRobot ? "true" : "false"}</span>
      {handleChange()}
    </div>
  );
};

export default Ex90;
