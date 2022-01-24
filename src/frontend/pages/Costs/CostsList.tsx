import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import useApiCall from '../../helpers/apiTools';
import ICost from '../../types/ICost';
import { addCommas } from '../../helpers/formatters';
import { toUKLongDate } from '../../helpers/dateTools';
import LoadingSpinner from '../../components/LoadingSpinner';

const CostsList = () => {

  const { dataArray: costs, dataReady, isLoading, errorMessage } = 
  useApiCall<ICost>(
    '/my-costs',
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );

  const styles = {
    row: tw`text-gray-600 cursor-pointer hover:text-gray-900 hover:font-bold odd:bg-gray-100`,
    cell: tw`p-6`,
    card: tw`bg-white rounded-lg my-4 p-4`,
    cardRow: tw`flex flex-row justify-between`,
    tag: tw`rounded-md bg-indigo-400 px-2 py-0.5 text-xs`,
  };

  // TODO: Send title of page to header using redux
  // TODO: read currency from api
  // TODO: separate components of 2 types of cost list
  return (
    <div tw='w-11/12 md:w-10/12 lg:w-9/12 2xl:w-8/12 mx-auto my-5'>
      <h1 tw='mx-auto my-5 text-indigo-500 text-center'>Costs List</h1>

      <div tw=''>

        { ! isLoading && errorMessage && <span>Error: {errorMessage}</span> }

        <div tw='md:hidden'>
          { isLoading && <LoadingSpinner /> }

          {
            dataReady && costs.map((cost: ICost, index: number) => (
              <div key={index} css={[styles.card]}>
                <div css={[styles.cardRow, tw`text-lg`]}>
                  <span tw='font-bold'>
                    {cost.title}
                  </span>
                  <span>
                    ({addCommas(cost.amount)} $)
                  </span>
                </div>
                <div css={[styles.cardRow, tw`text-gray-800 italic`]}>
                  <span>
                    {toUKLongDate(cost.date)}
                  </span>
                  <span>
                    {cost.primaryCat.title} \ {cost.secondaryCat.title}
                  </span>
                </div>
                <div css={[styles.cardRow]}>
                  <span>
                    {cost.tags.map(t => (
                      <span key={t} css={[styles.tag]}>{t}</span>
                    ))}
                  </span>
                  <span>
                    {cost.isUnexpected ? '✔' : ''}
                  </span>
                </div>
                <div css={[styles.cardRow, tw`text-gray-700`]}>
                  {cost.description}
                </div>
              </div>
            ))
          }
        </div>

        <table tw='w-full bg-white rounded-lg hidden md:block'>
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
            { isLoading && <tr><td colSpan={100}><LoadingSpinner /></td></tr> }

            {
              dataReady && costs.map((cost: ICost, index: number) => (
                <tr key={index} css={[styles.row]}>
                  <td css={[styles.cell, tw`font-bold`]}>
                    {cost.title}
                  </td>
                  <td css={[styles.cell]}>
                    {addCommas(cost.amount)} $
                  </td>
                  <td css={[styles.cell]}>
                    {toUKLongDate(cost.date)}
                  </td>
                  <td css={[styles.cell]}>
                    {cost.primaryCat.title}
                  </td>
                  <td css={[styles.cell]}>
                    {cost.secondaryCat.title}
                  </td>
                  <td css={[styles.cell]}>
                    {cost.tags}
                  </td>
                  <td css={[styles.cell]}>
                    {cost.isUnexpected ? '✔' : '❌'}
                  </td>
                  <td css={[styles.cell, tw`text-gray-700`]}>
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
