import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';

import useApiCall from '../../helpers/apiTools';
import ICost from '../../types/ICost';

const CostsList = () => {

  const { data: costs, dataReady, isLoading, errorMessage } = useApiCall(
    '/my-costs',
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );

  // TODO: Add Responsive Design
  // TODO: Add Card Design with toggle button
  // TODO: make the table in zebra style
  // TODO: Improve UI
  return (
    <div tw='w-8/12 mx-auto my-5'>
      <h1 tw='mx-auto my-5 text-indigo-500 text-center'>Costs List</h1>

      <div tw=''>

        { isLoading && <span>Is Loading ...</span> }

        { ! isLoading && errorMessage && <span>Error: {errorMessage}</span> }

        <table tw='w-full bg-white rounded-lg'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Primary Cat</th>
              <th>Secondary Cat</th>
              <th>Tags</th>
              <th>Is Unexpected</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              dataReady && costs.map((cost: ICost, index: number) => (
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

      </div> {/* Container */}
    </div>
  );
};

export default CostsList;
