import { useEffect, useState } from "react";
import axios, { AxiosRequestHeaders } from "axios";
import apiBaseUrl from "../apiUrl";

/* interface IFetchInput {
  apiName: string;
  // body: Array<any>;
  customHeaders?: any;
  // customHeaders?: Array<any>;
}*/

export interface ICapsule<Type> {
  data: Type | undefined;
  dataArray: Array<Type>;
  dataReady: boolean;
  isLoading: boolean;
  errorMessage: string;
}

// TODO: Define the headers array type
const useApiCall = <Type>(apiName: string,
  customHeaders?: AxiosRequestHeaders): ICapsule<Type> => {
  const [isLoading, setIsLoading] = useState(true);
  const [isArray, setIsArray] = useState(true);
  const [data, setData] = useState<Type>();
  const [dataArray, setDataArray] = useState<Array<Type>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const dataReady = !isLoading && !errorMessage && (
    data !== undefined || (isArray && dataArray.length > 0)
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    try {

      const result = await axios.get(apiBaseUrl + apiName, {
        headers: {
          'content-type': 'text/json',
          ...customHeaders,
        },
      });
      // console.log('fetched data=', result);

      if (result?.data?.isSuccessful) {

        if (Array.isArray(result.data.data)) {
          setDataArray(result.data.data);
          setIsArray(true);
        } else {
          setData(result.data.data);
          setIsArray(false);
        }

        setErrorMessage('');
      } else {
        setData(undefined);
        setDataArray([]);
        setErrorMessage(result.data.errorMessage);
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error.toString());
    }

    setIsLoading(false);
  };

  // return { data: (data || dataArray), dataReady, isLoading, errorMessage };
  return { data, dataArray, dataReady, isLoading, errorMessage };
};

export default useApiCall;