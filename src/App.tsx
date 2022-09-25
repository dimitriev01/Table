import React, { useState } from 'react';
import './App.scss';
import Btn from './components/Btn/Btn';
import Input from './components/Input/Input';
import { IPerson } from './interfaces/IPerson';

function App() {
  const persons: IPerson[] = [
    {
      id: 1,
      firstName: "Вася",
      lastName: "Пупкин",
      age: 20,
      gender: "Мужской",
    },
    {
      id: 2,
      firstName: "Петя",
      lastName: "Шишкин",
      age: 31,
      gender: "Мужской",
    },
    {
      id: 3,
      firstName: "Мария",
      lastName: "Казанцева",
      age: 63,
      gender: "Женский",
    },
    {
      id: 4,
      firstName: "Алёна",
      lastName: "Лис",
      age: 13,
      gender: "Женский",
    }
  ]
  const [query, setQuery] = useState<string>('')

  return (
    <div className="App">
      <div className="container">
        <div className='search'>
          <Input
            className='search__input'
            query={query}
            setQuery={setQuery}
          />
          <span>
            <Btn className='search__btn'>
              Искать
            </Btn>
          </span>
        </div>
        <div className="table">
          <div className='table__name'>
            Таблица с людьми
          </div>
          <div className="table__body">
            <div className="table__head">
              {/* <>
                {
                  persons.map(p => {
                    return (
                      <div
                        key={p.id}
                        className="table__cell"
                      >
                        {p.age}
                      </div>
                    )
                  })
                }
              </> */}
              <div className="table__cell">id</div>
              <div className="table__cell">Имя</div>
              <div className="table__cell">Фамилия</div>
              <div className="table__cell">Возраст</div>
              <div className="table__cell">Пол</div>
            </div>
            <div className="table__row">
              <div className="table__cell">id</div>
              <div className="table__cell">1</div>
              <div className="table__cell">Имя</div>
              <div className="table__cell">Вася</div>
              <div className="table__cell">Фамилия</div>
              <div className="table__cell">Пупкин</div>
              <div className="table__cell">Возраст</div>
              <div className="table__cell">20</div>
              <div className="table__cell">Пол</div>
              <div className="table__cell">Мужской</div>
            </div>
            <div className="table__row">
              <div className="table__cell">id</div>
              <div className="table__cell">2</div>
              <div className="table__cell">Имя</div>
              <div className="table__cell">Петя</div>
              <div className="table__cell">Фамилия</div>
              <div className="table__cell">Шишкин</div>
              <div className="table__cell">Возраст</div>
              <div className="table__cell">31</div>
              <div className="table__cell">Пол</div>
              <div className="table__cell">Мужской</div>
            </div>
            <div className="table__row">
              <div className="table__cell">id</div>
              <div className="table__cell">3</div>
              <div className="table__cell">Имя</div>
              <div className="table__cell">Мария</div>
              <div className="table__cell">Фамилия</div>
              <div className="table__cell">Казанцева</div>
              <div className="table__cell">Возраст</div>
              <div className="table__cell">63</div>
              <div className="table__cell">Пол</div>
              <div className="table__cell">Женский</div>
            </div>
            <div className="table__row">
              <div className="table__cell">id</div>
              <div className="table__cell">4</div>
              <div className="table__cell">Имя</div>
              <div className="table__cell">Алёна</div>
              <div className="table__cell">Фамилия</div>
              <div className="table__cell">Лис</div>
              <div className="table__cell">Возраст</div>
              <div className="table__cell">13</div>
              <div className="table__cell">Пол</div>
              <div className="table__cell">Женский</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
