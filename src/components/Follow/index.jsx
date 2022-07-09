import styles from "./Follow.module.scss";

const Follow = () => {
  return (
    <div className={styles.meta}>
      <h2>add us to your doom scroll</h2>
      <ul>
        <li>
          <a href="https://www.facebook.com/disassturbator">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/disassturbator/">Instagram</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCwHkx6iSMDSeVHdHxYhDdvg">
            youtube
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Follow;
