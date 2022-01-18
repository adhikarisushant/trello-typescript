import React from 'react';
import { Column } from './Column'
import { Card } from './Card'
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem'

function App() {
  return (
    <AppContainer>
        <Column text="To Do">
          <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
          <Card text="Learn TypeScript" />
        </Column>
        <Column text="Done">
          <Card text="Begin to use static typing" />
        </Column>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;

