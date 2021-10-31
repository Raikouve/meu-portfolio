import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import '../styles/cards.css';

function ProjectCard({
  cardImage, projectName, projectDescription, techs,
}) {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={cardImage} alt={projectName} />
      </div>
      <div className="content-container">
        <h3>{ projectName }</h3>
        <p>{ projectDescription }</p>
      </div>
      <div className="card-techs">
        {techs.map((tech) => <img key={tech.id} src={tech.img} alt="tech" />)}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  techs: arrayOf(PropTypes.shape({})).isRequired,
};

export default ProjectCard;
