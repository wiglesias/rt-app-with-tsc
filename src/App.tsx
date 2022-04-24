import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub, SubsResponseFromApi } from './types';
interface AppState {
  subs: Array<Sub>
  newSubNumber: number
}

// const INTIAL_STATE = [
//   {
//     nick: 'cunyape',
//     subMonths: 3,
//     avatar: 'https://i.pravatar.cc/150?u=cunyape',
//     description: 'Cunyape fa de moderador a vegades'
//   },
//   {
//     nick: 'tamales',
//     subMonths: 7,
//     avatar: 'https://i.pravatar.cc/150?u=tamales',
//   }
// ];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubNumber, setNewSubNumber] = useState<AppState["newSubNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setSubs(INTIAL_STATE);
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch('http://localhost:3001/subs').then(res => res.json())
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description
        } = subFromApi

        return {
          nick,
          subMonths,
          avatar,
          description
        }
      })
    }

    // fetchSubs()
    //   .then(apiSubs => {
    //     const subs = mapFromApiToSubs(apiSubs);
    //     setSubs(subs);
    // })
    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubNumber(n => n + 1)
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Cotoca subs</h1>
      <List subs={subs}/>
      New subs: {newSubNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
