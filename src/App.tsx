import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import { IPerson } from './interfaces/IPerson';

const personsList = [
  {
    id: '1',
    firstName: 'Вася',
    lastName: 'Пупкин',
    age: '20',
    gender: 'Мужской',
  },
  {
    id: '2',
    firstName: 'Петя',
    lastName: 'Шишкин',
    age: '31',
    gender: 'Мужской',
  },
  {
    id: '3',
    firstName: 'Мария',
    lastName: 'Казанцева',
    age: '63',
    gender: 'Женский',
  },
  {
    id: '4',
    firstName: 'Алёна',
    lastName: 'Лис',
    age: '13',
    gender: 'Женский',
  },
];
const nameSells = ["id", "Имя", "Фамилия", "Возраст", "Пол"];

function App() {
  const persons: IPerson[] = (personsList);
  const [query, setQuery] = useState<string>('');
  const [idSearched, setIdSearched] = useState<string[]>(null!);

  return (
    <div className="App">
      <div className="container">
        <Search
          setIdSearched={setIdSearched}
          persons={persons}
          setQuery={setQuery}
          query={query}
        />
        <Table
          nameSells={nameSells}
          persons={persons}
          idSearched={idSearched}
        />
      </div>
    </div>
  );
}

export default App;
