import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';
import portfolioContext from '../context/portfolioContext';
import '../styles/sectionPages.css';

function Projects() {
  const { cardsData } = useContext(portfolioContext);

  return (
    <section className="section-page-projects">
      <div className="title-container">
        <h2>Últimos projetos</h2>
      </div>
      <div className="project-cards-container">
        {cardsData.map(({
          id, image, name, description, techs, path,
        }) => (
          <ProjectCard
            key={id}
            cardImage={image}
            projectName={name}
            projectDescription={description}
            techs={techs}
            path={path}
          />
        ))}
      </div>
      {/* <div className="more-projects">
        <h2 onClick={() => history.push('/portfolio/moreprojects')}>Ver mais →</h2>
      </div> */}
    </section>
  );
}

Projects.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Projects;
