import React, { useState, useEffect } from 'react';
import FetchJsonAPI from '../../../utils/FetchJsonAPI/FetchJsonAPI';

const fetch = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const fetchedTodos = await FetchJsonAPI();

    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  return (
    <div>
      <p>You have just fetched a TODO!</p>
      {JSON.stringify(todos)}
    </div>
  );
};

export default fetch;
