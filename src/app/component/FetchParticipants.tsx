import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchParticipant = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost/cocgbagi-api/" + apiUrl
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 1000); // Fetch data every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [apiUrl]);

  return { loading, data, error };
};

export default FetchParticipant;
