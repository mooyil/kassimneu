import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;

export const useFetch1 = (url) => {
  const [data1, setData1] = useState(null);
  const [error1, setError1] = useState(null);
  const [loading1, setLoading1] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading1(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData1(json);
        setLoading1(false);
      } catch (error) {
        setError1(error);
        setLoading1(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading1, error1, data1 };
};

export const useFetch2 = (url) => {
  const [data2, setData2] = useState(null);
  const [error2, setError2] = useState(null);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading2(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData2(json);
        setLoading2(false);
      } catch (error) {
        setError2(error);
        setLoading2(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading2, error2, data2 };
};

export const useFetch3 = (url) => {
  const [data3, setData3] = useState(null);
  const [error3, setError3] = useState(null);
  const [loading3, setLoading3] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading3(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData3(json);
        setLoading3(false);
      } catch (error) {
        setError3(error);
        setLoading3(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading3, error3, data3 };
};
