import mark from "../img/mark.svg";
import styles from "./Card.module.css"

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={data.imageUrl} />
      <div className={styles.info}>
        <div className={styles.location}>
          <div className={styles.country}>
            <img src={mark} />
            <p>{data.location}</p>
          </div>
          <a className={styles.location_link} href={data.googleMapsUrl} target="_blank">View on Google Maps</a>
        </div>
        <div className={styles.title}>
          <h1>{data.title}</h1>
        </div>
        <div className={styles.date}>
          <p>
            {data.startDate} - {data.endDate}
          </p>
        </div>
        <div className={styles.description}>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
