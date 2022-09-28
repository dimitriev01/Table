import React, { useState } from 'react';
import { IPerson } from '../../interfaces/IPerson';
import Btn from '../Btn/Btn';
import Input from '../Input/Input';
import cl from './Search.module.scss'

interface SearchProps {
  query: string
  setQuery: (query: string) => void
  persons: IPerson[]
  setIdSearched: (id: string[]) => void
}

const Search: React.FC<SearchProps> = ({ query, setQuery, persons, setIdSearched }) => {
  const [countSearched, setCountSearched] = useState<number>(0);
  const [isTriedToSearch, setIsTriedToSearch] = useState<boolean>(false);
  const handleOnClick = () => {
    setIsTriedToSearch(true);
    let queryLowerCase = query.toLowerCase();
    if (!queryLowerCase.length) {
      setCountSearched(0);
      setIdSearched([]);
      setQuery('');
      return;
    }

    const searchedPersons = persons && persons.filter((p) =>
      p.id.includes(queryLowerCase) ||
      p.firstName.toLowerCase().includes(queryLowerCase) ||
      p.lastName.toLowerCase().includes(queryLowerCase) ||
      p.age.includes(queryLowerCase) ||
      p.gender.toLowerCase().includes(queryLowerCase)
    );

    setIdSearched(searchedPersons.map((p) => { return (p.id) }));
    setCountSearched(searchedPersons.length);
    setQuery('');
  }

  return (
    <>
      <div className={cl.search}>
        <Input
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)}
          placeholder="Поиск по столбцам"
        />
        <span>
          <Btn onClick={handleOnClick}>
            Искать
          </Btn>
        </span>
      </div>
      {
        isTriedToSearch &&
        <div className={cl.coincidence}>
          {
            (countSearched === 0) ?
              'Ничего не найдено' :
              `Совпадений: ${countSearched}`
          }
        </div>
      }
    </>
  );
};

export default Search;