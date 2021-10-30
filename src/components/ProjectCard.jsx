import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function ProjectCard({ cardImage, projectName, projectDescription }) {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={cardImage} alt={projectName} />
      </div>
      <div className="content-container">
        <h3>{ projectName }</h3>
        <p>{ projectDescription }</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default ProjectCard;
