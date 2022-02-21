import { useState, useEffect } from 'react';
import api from '../services/api';



export default function useApi(url: string, time: number = 0) {
    const [loadedData, setLoadedData] = useState<any>(false);
    const [currentUrl, setUrl] = useState(url);
    const [loading, setLoading] = useState(true);

    const controller = new AbortController();


    //Fetch data from api
    const FetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get(currentUrl, { signal: controller.signal });

            setLoadedData(response.data);
            setTimeout(() => { setLoading(false) }, time)

        } catch (error) {
            setLoadedData(false);
            setLoading(false);
        }

    }

    useEffect(() => {
        FetchData();

        return () => { }
        // eslint-disable-next-line
    }, [currentUrl])





    return [loadedData, loading, FetchData, setUrl]


}
