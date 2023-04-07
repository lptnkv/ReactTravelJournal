import styles from "./About.module.css"

export default function About() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Travel journal app</h1>
        <p className={styles.creator_info}>Made by Kirill Lipatnikov</p>
        <p>Made for client-server development course in RTU MIREA</p>
      </div>
    );
  }