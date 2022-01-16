import { useEffect, useState } from "react";
import axios, { AxiosRequestHeaders } from "axios";
import apiBaseUrl from "../apiUrl";

/* interface IFetchInput {
  apiName: string;
  // body: Array<any>;
  customHeaders?: any;
  // customHeaders?: Array<any>;
}*/

export interface ICapsule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  isLoading: boolean;
  errorMessage: string;
}

// TODO: Make this hook Generic to get the data type
// TODO: Define the headers array type
const useApiCall = (apiName: string,
  customHeaders?: AxiosRequestHeaders): ICapsule => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
        setData(result.data.data);
        setErrorMessage('');
      } else {
        setData([]);
        setErrorMessage(result.data.errorMessage);
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error.toString());
    }

    setIsLoading(false);
  };

  return { data, isLoading, errorMessage };
};

export default useApiCall;