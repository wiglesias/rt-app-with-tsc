import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

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

  useEffect(() => {
    setSubs(INTIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Cotoca subs</h1>
    <List subs={subs}/>
    </div>
  );
}

export default App;
