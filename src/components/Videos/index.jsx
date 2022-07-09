import styles from "./Videos.module.scss";

const Videos = () => {
  return (
    <div className={styles.meta}>
      <div className={styles.video_pack}>
        <h2>anxiety attack</h2>
        <iframe
          width="100%"
          height="630"
          src="https://www.youtube.com/embed/JdTs_vF0piU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/* <div className={styles.video_pack}>
        <h2></h2>
      </div> */}
    </div>
  );
};

export default Videos;
