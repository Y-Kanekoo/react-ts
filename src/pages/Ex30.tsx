import React from "react";

const Ex30: React.FC = () => {
  const itemName = "お掃除ロボット";
  const itemUrl = "http://irobot-jp.com/";
  const itemImg = "img/irobot.jpg";

  return (
    <div>
      <div>商品名:{itemName}</div>
      <div>
        商品URL：<a href={itemUrl}>リンク</a>
      </div>
      <div>
        画像:
        <img src={itemImg} />
      </div>
    </div>
  );
};
export default Ex30;
