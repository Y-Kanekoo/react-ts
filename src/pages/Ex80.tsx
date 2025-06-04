import React, { useState } from "react";

const Ex80: React.FC = () => {
  const [isRobot, setIsRobot] = useState<boolean>(false); // ロボットチェック

  const handleRobotChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRobot(event.target.checked);
  };

  return (
    <div>
      私はロボットではありません。
      <label htmlFor="isRobot"></label>
      <input
        type="checkbox"
        name="robbot"
        id="robbot"
        onChange={handleRobotChange}
      />
      /{isRobot && <span>true</span>}
    </div>
  );
};

export default Ex80;
