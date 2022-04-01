import react from "react";
import Card from "./Card";

export default function Main({data}) {
    console.log(data);
  const cards = data.map((item) => {
    return <Card data={item} />;
  });
  console.log(cards);
  return <div className="card-list">{cards}</div>;
}
