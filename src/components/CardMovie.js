import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Col sm="3">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
            className="card__image"
            alt="Movie Poster"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم: {mov.original_title}</p>
              <p>تاريخ الاصدار: {mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم: {mov.overview}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
