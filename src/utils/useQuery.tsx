import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
export default function useQuery() {
    const push = useHistory().push;
    const loaction = useLocation();
    const query = new URLSearchParams(loaction.search);
    const [state, setState] = useState(query);


    useEffect(() => {
        if (query.toString() !== state.toString())
            setState(query);

        return () => {

        }
    }, [query])



    const getQuery = (key: string) => {
        return query.get(key);
    }

    const setQuery = (key: string, value: string) => {
        if (query.has(key))
            query.set(key, value);
        else
            query.append(key, value);

        push({
            search: '?' + query.toString()
        })

    }



    return { query: state, getQuery, setQuery }

}
