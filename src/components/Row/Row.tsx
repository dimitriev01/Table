import React from 'react';
import { IPerson } from '../../interfaces/IPerson';
import Cell from '../Cell/Cell';
import cl from './Row.module.scss'

interface RowProps {
  person: IPerson
  idSearched: string[]
  nameSells: string[]
}

const Row: React.FC<RowProps> = ({ person, idSearched, nameSells }) => {
  const rowIdCearched = idSearched && idSearched.filter(p => p === person.id);

  return (
    <div className={[cl.row, (rowIdCearched && rowIdCearched.length) ? cl.row_active : ''].join(' ')}>
      <div className={cl.row__mesh}>
        <div className={cl.row__cell}>{nameSells[0]}</div>
        <Cell cell={person.id} />
      </div>
      <div className={cl.row__mesh}>
        <div className={cl.row__cell}>{nameSells[1]}</div>
        <Cell cell={person.firstName} />
      </div>
      <div className={cl.row__mesh}>
        <div className={cl.row__cell}>{nameSells[2]}</div>
        <Cell cell={person.lastName} />
      </div>
      <div className={cl.row__mesh}>
        <div className={cl.row__cell}>{nameSells[3]}</div>
        <Cell cell={person.age} />
      </div>
      <div className={cl.row__mesh}>
        <div className={cl.row__cell}>{nameSells[4]}</div>
        <Cell cell={person.gender} />
      </div>
    </div>
  );
};

export default Row;