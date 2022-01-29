import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import ICost from '../../types/ICost';
import { addCommas } from '../../helpers/formatters';
import { toUKLongDate } from '../../helpers/dateTools';

interface CostCardPropTypes {
  cost: ICost;
}

const CostCard = ({ cost }: CostCardPropTypes) => {
  const styles = {
    card: tw`bg-white rounded-lg my-4 p-4`,
    cardRow: tw`flex flex-row justify-between`,
    tag: tw`rounded-md bg-indigo-400 px-2 py-0.5 text-xs`,
  };

  return (
    <div css={[styles.card]}>
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
  );
};

export default CostCard;
