import React, { useState } from 'react';
import { IPerson } from '../../interfaces/IPerson';
import Head from '../Head/Head';
import Row from '../Row/Row';
import cl from './Table.module.scss'

interface TableProps {
  persons: IPerson[]
}

const Table: React.FC<TableProps> = ({ persons }) => {
  const masValues = Object.values(persons)
  const rows = masValues.map(person => {
    return (
      <Row
        person={person}
        key={person.id}
      />
    );
  });

  return (
    <div className={cl.table}>
      <div className={cl.table__name}>
        Таблица с людьми
      </div>
      <div className={cl.table__body}>
        <Head />
        {rows}
        { /* <div className="table__row">
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
          </div> */
        }
      </div>
    </div>
  );
};

export default Table;