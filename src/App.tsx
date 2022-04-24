import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { getAllSubs } from './services/getAllSubs';
import { Sub } from './types';
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
  const [newSubNumber, setNewSubNumber] = useState<AppState["newSubNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null);

  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect(() => {
    // setSubs(INTIAL_STATE);

    // fetchSubs()
    //   .then(apiSubs => {
    //     const subs = mapFromApiToSubs(apiSubs);
    //     setSubs(subs);
    // })
    getAllSubs().then(setSubs)
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
