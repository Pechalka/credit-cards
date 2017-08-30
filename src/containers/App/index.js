import React from 'react';

import CardForm from './CardForm';
import CardsList from './CardsList';
import AppContainer from '../../components/AppContainer';

const App = () => (
  <AppContainer>
    <CardForm  />
    <CardsList />
  </AppContainer>
);

export default App;
