import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';

const Costs = () => {
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    readCosts();
  }, []);

  const readCosts = async () => {
    const result = await axios.get(apiUrl + `/my-costs`, {
      headers: {
        'content-type': 'text/json',
        'userId': '61e08a74927d9e1bc3cfbe79',
      },
    });
    console.log(result.data);
    setCosts(result.data.data);
  };

  return (
    <div>
      <h1>Costs List</h1>

      {
        costs.map((cost, index) => (
          <div key={index}>
            {cost.title}
            {cost.amount}
            {cost.date}
            {cost.primaryCat.title}
            {cost.secondaryCat.title}
            {cost.tags}
            {cost.isUnexpected ? 'True' : 'False'}
            {cost.description}
          </div>
        ))
      }
    </div>
  );
};

export default Costs;
