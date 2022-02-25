import { useEffect, useState } from 'react'
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
        // eslint-disable-next-line
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

    const hasQuery = (key: string) => {
        return query.has(key);
    }

    const clearPage = () => {
        if (query.has('page')) {
            query.delete('page');
            push({
                search: '?' + query.toString()
            })
        }
    }

    const getPage = () => {
        const page = query.get('page')

        if (!page)
            return 1;

        try {
            return parseInt(page);
        } catch (error) {
            return 1;
        }
    }


    return { query: state, getQuery, setQuery, hasQuery, clearPage, getPage }

}
