import { useState, useEffect } from 'react';
import api from '../services/api';



export default function useSessionApi(url: string) {
    const [loadedData, setLoadedData] = useState<any>(false);
    const [loading, setLoading] = useState(true);

    //Load data from session storage, and fetch from api if none in storage
    const LoadData = () => {
        const recovered = sessionStorage.getItem(url);
        if (recovered) {
            setLoadedData(JSON.parse(recovered));
            setLoading(false);
        }
        else {

            FetchData();
        }

    }
    //Fetch data from api
    const FetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get(url);
            sessionStorage.setItem(url, JSON.stringify(response.data));
            setLoadedData(response.data);
            setLoading(false);

        } catch (error) {
            setLoadedData(false);
            setLoading(false);
        }

    }

    useEffect(() => {
        LoadData();

        // eslint-disable-next-line
    }, [])


    return [loadedData, loading, FetchData]


}
