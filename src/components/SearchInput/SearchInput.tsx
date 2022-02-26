import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import { useQuery } from '../../utils/hooks';
import { Input, CloseBtn } from './SeachInputStyles'

export default function SearchInput() {

    const { getQuery, setQuery, clearSearch, clearPage } = useQuery();
    const queryValue = getQuery('search')
    const [value, setValue] = useState(queryValue);
    const handleChange = (e: BaseSyntheticEvent) => {
        setValue(e.target.value)
    }


    const handleClear = () => {
        if (queryValue)
            clearSearch();
        setValue(null);


    }

    useEffect(() => {
        if (value !== null && value !== queryValue)
            setQuery('search', value);
        clearPage();

        return () => {

        }
        // eslint-disable-next-line
    }, [value])


    return (<>
        <Input placeholder='  Pesquise aqui...' onChange={handleChange} value={value || ''} />

        <CloseBtn onClick={handleClear} />

    </>

    )
}
