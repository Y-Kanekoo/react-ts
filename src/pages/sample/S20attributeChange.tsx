import React from "react";
import assetsImageUrl from "../../assets/react.svg"; // src/assets/react.svgの画像をインポート

const S20attributeChange: React.FC = () => {
  const url = "http://google.com";
  const publicImageUrl = "/vite.svg"; // public/vite.svgの画像
  const canNotClick = true;

  return (
    <div className="sample">
      <div>
        リンク：<a href={url}>Googleへ飛ぶ</a>
      </div>
      <div>
        publicディレクトリ内の画像：
        <img src={publicImageUrl} />
      </div>
      <div>
        assetsディレクトリ内の画像：
        <img src={assetsImageUrl} />
      </div>
      <div>
        <button type="button" disabled={canNotClick}>
          押せないボタン
        </button>
      </div>
    </div>
  );
};

export default S20attributeChange;
