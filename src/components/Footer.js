import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p>
          Created by Niklola Seke. Powered by{" "}
          <img
            style={{ height: 50 }}
            src={require("../assets/img/moviedblogo.png")}
            alt="moviedblogo"
          />
        </p>
      </div>
    );
  }
}

export default Footer;
