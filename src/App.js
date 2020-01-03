import React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import DemoContainer from './components/main/DemoContainer';

const AppContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
  overflow: none;
  flex-direction: column;
`


function App() {
  return (
    <AppContainer>
      <Header />
      <DemoContainer />
    </AppContainer>
  );
}

export default App;
