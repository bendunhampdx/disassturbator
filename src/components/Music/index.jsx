/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./Music.module.scss";

const Music = () => {
  return (
    <div className={styles.meta}>
      <h2>Auditory Hallucinations</h2>
      <div>
        <iframe
          src="https://open.spotify.com/embed/artist/4jPVcBmNQZbnSfMXLPWwGc?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
