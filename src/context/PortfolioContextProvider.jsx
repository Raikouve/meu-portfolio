import React from 'react';
import { PropTypes } from 'prop-types';
import portfolioContext from './portfolioContext';
import cardsData from '../data/cardsData';

function PortfolioContextProvider({ children }) {
  return (
    <portfolioContext.Provider value={{ cardsData }}>
      { children }
    </portfolioContext.Provider>
  );
}

PortfolioContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PortfolioContextProvider;
