import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetails, fetchMovieActors } from "../actions";

class Actors extends React.Component {
  componentWillMount = async () => {
    // const id = this.props.match.params.id;
    const person_id = this.props.match.params.person_id;
    this.props.fetchMovieCredits();
    this.props.fetchMovieActors(person_id);
  };
  render() {
    return (
      <>
        {console.log(this.props)}

        <div>fdsa</div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieCredits: state.movieCredits,
    movieActors: state.movieActors
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchMovieActors }
)(Actors);
