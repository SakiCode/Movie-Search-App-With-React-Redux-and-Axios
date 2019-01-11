import React from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import Swiper from "swiper";
import "../assets/css/filmlist.css";

class Jumbotron extends React.Component {
  componentDidMount = async () => {
    this.props.fetchMovies();
  };
  render() {
    (() => {
      const sliderEl = document.querySelectorAll(".swiper-container");
      if (!sliderEl) {
        return;
      }
      new Swiper(sliderEl, {
        init: true,
        loop: true,
        slidesPerView: 1,
        observer: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    })();

    return (
      <div className="carousel-container" data-wow-duration="3s">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {this.props.movies.map(movie => (
              <div
                key={movie.id}
                className="swiper-slide"
                style={{
                  background: `url(${`https://image.tmdb.org/t/p/original${
                    movie.backdrop_path
                  }`}) center center no-repeat / cover`
                }}
              >
                <h3 className="swiper-slide__title">{movie.title}</h3>
                <p className="swiper-slide-rating">
                  <svg
                    className="swiper-slide-rating__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                  </svg>
                  {movie.vote_average}
                </p>
              </div>
            ))}
          </div>

          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>

        <hr className="carousel-container__separator" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovies
  }
)(Jumbotron);
