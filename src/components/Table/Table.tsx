import React from 'react';
import { IPerson } from '../../interfaces/IPerson';
import Head from '../Head/Head';
import Row from '../Row/Row';
import cl from './Table.module.scss';

interface TableProps {
  persons: IPerson[]
  idSearched: string[]
  nameSells: string[]
}

const Table: React.FC<TableProps> = ({ persons, idSearched, nameSells }) => {
  const masValues = Object.values(persons);
  const rows = masValues.map((person) => (
    <Row
      nameSells={nameSells}
      idSearched={idSearched}
      person={person}
      key={person.id}
    />
  ));

  return (
    <div className={cl.table}>
      <div className={cl.table__name}>
        Таблица с людьми
      </div>
      <div className={cl.table__body}>
        <Head />
        {rows}
      </div>
    </div>
  );
};
export default Table;
