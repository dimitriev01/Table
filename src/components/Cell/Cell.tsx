import React from 'react';
import cl from './Cell.module.scss'

interface CellProps {
  cell: string
}

const Cell: React.FC<CellProps> = ({ cell }) => {
  return (
    <div className={cl.cell}>
      {cell}
    </div>
  );
};

export default Cell;