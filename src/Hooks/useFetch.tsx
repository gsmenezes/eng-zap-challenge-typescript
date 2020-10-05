import axios from 'axios';
import { useEffect, useState } from "react";

export default function useFetch(method: any, url: any, options?: any) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url, options);
        setResponse(data);
      } catch (error) {
        setResponse(error);
      }
    })();
  }, [url, method, options]);
  return [response];
}
