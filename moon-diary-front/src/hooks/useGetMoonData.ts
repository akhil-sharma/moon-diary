import { useState, useEffect } from "react";
import axios, { CancelTokenSource } from "axios";

export interface MoonImageData {
    url: string;
    filename: string;
    media_type: string;
    alt_text: string;
    width: number;
    height: number;
    pixels: number;
}

export interface MoonInfo {
    image: MoonImageData;
    image_highres: MoonImageData;
    time: string;
    phase: number;
    obscuration: number;
    age: number;
    diameter: number;
    distance: number;
    j2000_ra: number;
    j2000_dec: number;
    subsolar_lon: number;
    subsolar_lat: number;
    subearth_lon: number;
    subearth_lat: number;
    posangle: number;
}

export interface ApiError {
    message: string;
}

const useGetMoonData = (utcDateString: string = "2023-07-21T02:54" ) => {
    const [data, setData] = useState<MoonInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ApiError | null>(null);

    useEffect(() => {
        let source: CancelTokenSource;

        const fetchData = async () => {
            try {
                source = axios.CancelToken.source();
                const response = await axios.get<MoonInfo>(
                    `https://svs.gsfc.nasa.gov/api/dialamoon/${utcDateString}`, {
                    cancelToken: source.token
                });
                setData(response.data);
                setLoading(false);
            } catch (error) {
                if (! axios.isCancel(error)){
                    setError({message: 'Error fetching Data.'});
                    setLoading(false);
                }
            }
        };

        fetchData();

        // cleanUp the effect when the component unmounts.
        return () => {
            if (source) {
                source.cancel('GetLunarData: component unmounted.');
            } 
        };
    }, [utcDateString]);

    return {data, loading, error};
}

export default useGetMoonData;