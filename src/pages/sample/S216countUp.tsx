import React, { useEffect, useState } from "react";

const colors = [
  "#ff6666",
  "#66ccff",
  "#66ff66",
  "#ffff66",
  "#ffb366",
  "#b366ff",
  "#ff66b2",
];

const S216CountUp: React.FC = () => {
  const [count, setCount] = useState(0);
  const [colorIdx, setColorIdx] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [count]);

  const countUp = () => {
    setCount((prevCount) => prevCount + 1);
    setColorIdx((prev) => (prev + 1) % colors.length);
  };

  const reset = () => {
    setCount(0);
    setColorIdx(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <p
        style={{
          fontSize: "2rem",
          color: colors[colorIdx],
          transition: "color 0.3s, transform 0.3s",
          transform: animate ? "scale(1.3) rotate(-10deg)" : "scale(1)",
        }}
      >
        現在のカウント：{count}
      </p>
      <button
        onClick={countUp}
        style={{
          backgroundColor: colors[colorIdx],
          color: "#222",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginRight: 10,
          borderRadius: 8,
          border: "none",
          padding: "10px 24px",
          cursor: "pointer",
          boxShadow: animate ? "0 0 10px #888" : "none",
        }}
      >
        カウントを増やす
      </button>
      <button
        onClick={reset}
        style={{
          backgroundColor: "#eee",
          color: "#333",
          fontWeight: "bold",
          fontSize: "1.1rem",
          borderRadius: 8,
          border: "1px solid #ccc",
          padding: "10px 24px",
          cursor: "pointer",
        }}
      >
        リセット
      </button>
      {count > 0 && count % 10 === 0 && (
        <div
          style={{
            marginTop: 20,
            fontSize: "1.3rem",
            color: "#ff6600",
            fontWeight: "bold",
          }}
        >
          🎉 {count}回達成！すごい！ 🎉
        </div>
      )}
    </div>
  );
};

export default S216CountUp;
