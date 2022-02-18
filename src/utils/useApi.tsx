import { useState, useEffect } from 'react';
import api from '../services/api';



export default function useApi(url: string) {
    const [loadedData, setLoadedData] = useState<any>(false);
    const [currentUrl, setUrl] = useState(url);
    const [loading, setLoading] = useState(true);

    //Fetch data from api
    const FetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get(currentUrl);
            sessionStorage.setItem(currentUrl, JSON.stringify(response.data));
            setLoadedData(response.data);
            setTimeout(() => { setLoading(false) }, 2000)

        } catch (error) {
            setLoadedData(false);
            setLoading(false);
        }

    }

    useEffect(() => {
        FetchData();
        // eslint-disable-next-line
    }, [currentUrl])




    return [loadedData, loading, FetchData, setUrl]


}
