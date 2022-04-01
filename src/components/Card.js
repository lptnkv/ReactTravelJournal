import react from "react";
import mark from "../img/mark.svg";

export default function Card({ data }) {
  return (
    <div className="card">
      <img className="card-img" src={data.imageUrl} />
      <div className="card-info">
        <div className="card-info-location">
          <div className="card-info-country">
            <img src={mark} />
            <p>{data.location}</p>
          </div>
          <a href={data.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card-info-title">
          <h1>{data.title}</h1>
        </div>
        <div className="card-info-date">
          <p>
            {data.startDate} - {data.endDate}
          </p>
        </div>
        <div className="card-info-description">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
