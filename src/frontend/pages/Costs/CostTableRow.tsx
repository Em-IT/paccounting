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
    </tr>
  );
};

export default CostTableRow;
