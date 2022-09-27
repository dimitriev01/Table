import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import { IPerson } from './interfaces/IPerson';

const personsList = [
  {
    id: "1",
    firstName: "Вася",
    lastName: "Пупкин",
    age: "20",
    gender: "Мужской",
  },
  {
    id: "2",
    firstName: "Петя",
    lastName: "Шишкин",
    age: "31",
    gender: "Мужской",
  },
  {
    id: "3",
    firstName: "Мария",
    lastName: "Казанцева",
    age: "63",
    gender: "Женский",
  },
  {
    id: "4",
    firstName: "Алёна",
    lastName: "Лис",
    age: "13",
    gender: "Женский",
  }
];

function App() {
  const persons: IPerson[] = (personsList);
  const [query, setQuery] = useState<string>('')

  return (
    <div className="App">
      <div className="container">
        <Search
          persons={persons}
          setQuery={setQuery}
          query={query}
        />
        <Table persons={persons} />
      </div>
    </div >
  );
}

export default App;
