import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types';
interface AppState {
  subs: Array<Sub>
}

const INTIAL_STATE = [
  {
    nick: 'cunyape',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=cunyape',
    description: 'Cunyape fa de moderador a vegades'
  },
  {
    nick: 'tamales',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=tamales',
  }
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INTIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Cotoca subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
