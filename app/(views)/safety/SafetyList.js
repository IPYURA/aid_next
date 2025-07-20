import CountButton from "./CountButton";
import styles from "./safety.module.css";

function SafetyList() {
  return (
    <>
      <div className={styles.resultBoard}>
        <strong></strong>
      </div>

      <ul className={styles.list}>
        <li>
          <span>항목1</span>
          <CountButton />
        </li>
        <li>
          <span>항목2</span>
          <CountButton />
        </li>
        <li>
          <span>항목3</span>
          <CountButton />
        </li>
      </ul>
    </>
  );
}
export default SafetyList;
