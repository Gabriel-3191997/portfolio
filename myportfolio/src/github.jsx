import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class GitHub extends React.Component {
  render() {
    return (
      <>
        <a
          href="#"
          className="capitalize text-2xl md:text-lg py-3 md:py-2 px-3 bg-teal-700 text-white delay-500"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </>
    );
  }
}

export default GitHub;