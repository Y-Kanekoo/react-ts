import styles from "./Ex10.module.css";

const Ex10: React.FC = () => {
  const name = "山田太郎 ";
  return (
    <div>
      <p className={styles.border}> {name}</p>
    </div>
  );
};
export default Ex10;
