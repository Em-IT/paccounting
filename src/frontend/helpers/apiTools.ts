import { useEffect, useState } from "react";
import axios, { AxiosRequestHeaders } from "axios";
import apiBaseUrl from "../apiUrl";

/* interface IFetchInput {
  apiName: string;
  // body: Array<any>;
  customHeaders?: any;
  // customHeaders?: Array<any>;
}*/

export interface IGetCapsule<Type> {
  data: Type | undefined;
  dataArray: Array<Type>;
  dataReady: boolean;
  isLoading: boolean;
  errorMessage: string;
}

// TODO: Define the headers array type
const useAutoApi = <Type>(apiName: string,
  customBody?: any, customHeaders?: AxiosRequestHeaders,
  isPost?: boolean): IGetCapsule<Type> => {

  const [isLoading, setIsLoading] = useState(true);
  const [isArray, setIsArray] = useState(true);
  const [data, setData] = useState<Type>();
  const [dataArray, setDataArray] = useState<Array<Type>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const dataReady = !isLoading && !errorMessage && (
    data !== undefined || (isArray && dataArray.length > 0)
  );

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    setIsLoading(true);

    try {

      let result;

      if (isPost || (isPost === undefined && customBody)) {
        result = await axios.post(apiBaseUrl + apiName, customBody, {
          headers: {
            'content-type': 'text/json',
            ...customHeaders,
          },
        });
      } else {
        result = await axios.get(apiBaseUrl + apiName, {
          headers: {
            'content-type': 'text/json',
            ...customHeaders,
          },
        });
      }
      console.log('fetched data=', result);

      if (result?.data?.isSuccessful) {

        if (Array.isArray(result.data.data)) {
          setDataArray(result.data.data);
          setIsArray(true);
        } else {
          setData(result?.data?.data);
          setIsArray(false);
        }
        setErrorMessage('');

      } else {
        setData(undefined);
        setDataArray([]);
        setErrorMessage(result?.data?.errorMessage);
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

export interface ISendCapsule<Type> extends IGetCapsule<Type> {
  callApi: () => void;
}

export const useManualApi = <Type>(apiName: string,
  customBody?: any, customHeaders?: AxiosRequestHeaders,
  isPost?: boolean): ISendCapsule<Type> => {

  const [isLoading, setIsLoading] = useState(false);
  const [isArray, setIsArray] = useState(true);
  const [data, setData] = useState<Type>();
  const [dataArray, setDataArray] = useState<Array<Type>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const dataReady = !isLoading && !errorMessage && (
    data !== undefined || (isArray && dataArray.length > 0)
  );

  const callApi = async () => {
    setIsLoading(true);

    try {

      let result;

      // TODO: send header data using post method
      if (isPost || (isPost === undefined && customBody)) {
        result = await axios.post(apiBaseUrl + apiName, customBody);
      } else {
        result = await axios.get(apiBaseUrl + apiName, {
          headers: {
            'content-type': 'text/json',
            ...customHeaders,
          },
        });
      }
      // console.log('fetched data=', result);

      if (result?.data?.isSuccessful) {

        if (Array.isArray(result.data.data)) {
          setDataArray(result.data.data);
          setIsArray(true);
        } else {
          setData(result?.data?.data);
          setIsArray(false);
        }
        setErrorMessage('');

      } else {
        setData(undefined);
        setDataArray([]);
        setErrorMessage(result?.data?.errorMessage);
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setData(undefined);
      setDataArray([]);
      setErrorMessage(error.response.data.errorMessage || error.toString());
    }

    setIsLoading(false);
  };

  // return { data: (data || dataArray), dataReady, isLoading, errorMessage };
  return { callApi, data, dataArray, dataReady, isLoading, errorMessage };
};

export default useAutoApi;