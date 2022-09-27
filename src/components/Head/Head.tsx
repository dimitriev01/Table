import React from 'react';
import Cell from '../Cell/Cell';
import cl from './Head.module.scss'

const nameSells = ["id", "Имя", "Фамилия", "Возраст", "Пол"];

const Head: React.FC = () => {

  const head = nameSells.map(cell => {
    return (
      <Cell
        cell={cell}
        key={cell}
      />
    )
  });

  return (
    <div className={cl.head}>
      {head}
    </div>
  );
};

export default Head;