import React, { useContext } from 'react';
import ProjectCard from '../components/ProjectCard';
import portfolioContext from '../context/portfolioContext';
import '../styles/sectionPages.css';

function Projects() {
  const { cardsData } = useContext(portfolioContext);

  return (
    <section className="section-page-projects">
      <div className="title-container">
        <h2>Projetos</h2>
      </div>
      <div className="project-cards-container">
        {cardsData.map(({
          id, image, name, description, techs,
        }) => (
          <ProjectCard
            key={id}
            cardImage={image}
            projectName={name}
            projectDescription={description}
            techs={techs}
          />
        ))}
      </div>
      <div className="more-projects">
        <h2>Ver mais →</h2>
      </div>
    </section>
  );
}

export default Projects;
