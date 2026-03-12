import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Bir hata oluştu: ${response.status}`);
        }

        // DİKKAT: Verinin GitHub'da .json formatında olduğunu varsayıyoruz.
        // Eğer hala .js ise bu kısım hata verecektir.
        const result = await response.json();

        setData(result);
        setError(null);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]); // URL değiştiğinde useEffect tekrar çalışır

  return { data, loading, error };
};
