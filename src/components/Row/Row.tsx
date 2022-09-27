import React from 'react';
import { IPerson } from '../../interfaces/IPerson';
import Cell from '../Cell/Cell';
import cl from './Row.module.scss'

interface RowProps {
  person: IPerson
}

const Row: React.FC<RowProps> = ({ person }) => {

  return (
    <div className={[cl.row].join(' ')}>
      <div className={cl.row__cell}>id</div>
      <Cell cell={person.id} />
      <div className={cl.row__cell}>Имя</div>
      <Cell cell={person.firstName} />
      <div className={cl.row__cell}>Фамилия</div>
      <Cell cell={person.lastName} />
      <div className={cl.row__cell}>Возраст</div>
      <Cell cell={person.age} />
      <div className={cl.row__cell}>Пол</div>
      <Cell cell={person.gender} />
    </div>
  );
};

export default Row;