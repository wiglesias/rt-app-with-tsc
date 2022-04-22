import React, { useEffect, useState } from 'react';
import './App.css';

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
      <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
