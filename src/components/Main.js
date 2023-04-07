import Card from "./Card";
import styles from "./Main.module.css"

export default function Main({data}) {
    console.log(data);
  const cards = data.map((item) => {
    return <Card data={item} />;
  });
  console.log(cards);
  return <div className={styles.list}>{cards}</div>;
}
