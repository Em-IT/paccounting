import React from 'react';
import useApiCall from '../../helpers/apiTools';

const CostsList = () => {

  const { data: costs, dataReady, isLoading, errorMessage } = useApiCall(
    '/my-costs',
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );
  
  return (
    <div>
      <h1>Costs List</h1>

      { isLoading && <span>Is Loading ...</span> }

      { ! isLoading && errorMessage && <span>Error: {errorMessage}</span> }

      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            // TODO: define Cost interface
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            dataReady && costs.map((cost: any, index: number) => (
              <tr key={index}>
                <td>
                  {cost.title}
                </td>
                <td>
                  {cost.amount}
                </td>
                <td>
                  {cost.date}
                </td>
                <td>
                  {cost.primaryCat.title}
                </td>
                <td>
                  {cost.secondaryCat.title}
                </td>
                <td>
                  {cost.tags}
                </td>
                <td>
                  {cost.isUnexpected ? '✔' : 'X'}
                </td>
                <td>
                  {cost.description}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default CostsList;
