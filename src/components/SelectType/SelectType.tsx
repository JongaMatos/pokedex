import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import { SelectTypes } from './SelectTypeStyles'
import { captalize } from '../../utils/stringUtils'
import { useQuery } from '../../utils/hooks'
const PokemonsTypes = ['all', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']



export default function SelectType() {

  const { getQuery, setQuery, clearPage } = useQuery()

  const getCurentValue = () => {

    const initial = getQuery('type');

    if (!initial)
      return "all"

    if (initial === '')
      return 'all'

    return initial;
  };

  const initialValue = getCurentValue();

  const [selectValue, setSelectValue] = useState(initialValue);

  const handleSelectChange = (e: BaseSyntheticEvent) => {

    setSelectValue(e.target.value)

  }






  useEffect(() => {

    if (selectValue !== initialValue) {

      setQuery('type', selectValue);
      clearPage();
    }
    return () => { }
    
    // eslint-disable-next-line
  }, [selectValue])



  return (
    <SelectTypes value={selectValue} onChange={handleSelectChange}>
      {PokemonsTypes.map((type: string) => (<option key={type} value={type}>{captalize(type)}</option>))}

    </SelectTypes>
  )
}

