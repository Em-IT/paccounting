import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import ICost from '../../types/ICost';
import { addCommas } from '../../helpers/formatters';
import { toUKLongDate } from '../../helpers/dateTools';
import cStyles from '../../CommonStyles';

interface CostTableRowPropType {
  cost: ICost;
}

const CostTableRow = ({ cost }: CostTableRowPropType) => {
  
  const styles = {
    row: tw`text-gray-600 cursor-pointer odd:bg-gray-100 transition-all duration-200
      hover:text-gray-900 hover:font-bold hover:bg-purple-200`,
    cell: tw`px-2 py-6`,
    tag: tw`rounded-md bg-indigo-400 px-2 py-0.5 text-xs`,
  };

  return (
    <tr css={[styles.row]}>
      <td css={[styles.cell, tw`font-bold`]}>
        {cost.title}
      </td>
      <td css={[styles.cell, tw`text-center`]}>
        {addCommas(cost.amount)} $
      </td>
      <td css={[styles.cell]}>
        {toUKLongDate(cost.date)}
      </td>
      <td css={[styles.cell, tw`text-center`]}>
        {cost.primaryCat.title}
      </td>
      <td css={[styles.cell, tw`text-center`]}>
        {cost.secondaryCat.title}
      </td>
      <td css={[styles.cell, tw`text-center`]}>
        {cost.tags.map(t => (
          <span key={t} css={[styles.tag]}>{t}</span>
        ))}
      </td>
      <td css={[styles.cell, tw`text-center`]}>
        {cost.isUnexpected ? '✔' : '❌'}
      </td>
      <td css={[styles.cell, tw`text-gray-700`]}>
        {cost.description}
      </td>
      <td css={[styles.cell, tw`text-center`]}>
        <button css={[cStyles.btn, tw`p-2 m-1`]}>
          <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5 text-red-800"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867
              12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5
              4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <button css={[cStyles.btn, tw`p-2 m-1`]}>
          <svg xmlns="http://www.w3.org/2000/svg" tw="h-5 w-5 text-blue-700"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536
              3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default CostTableRow;
