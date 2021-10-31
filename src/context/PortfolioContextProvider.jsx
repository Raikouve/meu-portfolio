import React from 'react';
import { PropTypes } from 'prop-types';
import portfolioContext from './portfolioContext';
import cardsData from '../data/cardsData';
import aboutMeData from '../data/aboutMeData';

function PortfolioContextProvider({ children }) {
  return (
    <portfolioContext.Provider value={{ cardsData, aboutMeData }}>
      { children }
    </portfolioContext.Provider>
  );
}

PortfolioContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PortfolioContextProvider;
