import React from 'react';
import useApiCall from '../../helpers/apiTools';

const Costs = () => {

  const { data: costs, dataReady, isLoading, errorMessage } = useApiCall(
    '/my-costs',
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );
  
  return (
    <div>
      <h1>Costs List</h1>

      { isLoading && <span>Is Loading ...</span> }

      { ! isLoading && errorMessage && <span>Error: {errorMessage}</span> }

      {
        // TODO: define Cost interface
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dataReady && costs.map((cost: any, index: number) => (
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
