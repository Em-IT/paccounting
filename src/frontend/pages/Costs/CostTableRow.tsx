import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import ICost from '../../types/ICost';
import { addCommas } from '../../helpers/formatters';
import { toUKLongDate } from '../../helpers/dateTools';

interface CostTableRowPropType {
  cost: ICost;
}

const CostTableRow = ({ cost }: CostTableRowPropType) => {
  
  const styles = {
    row: tw`text-gray-600 cursor-pointer hover:text-gray-900 hover:font-bold odd:bg-gray-100`,
    cell: tw`p-6`,
    tag: tw`rounded-md bg-indigo-400 px-2 py-0.5 text-xs`,
  };

  return (
    <tr css={[styles.row]}>
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
  );
};

export default CostTableRow;
