import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

import { gStyles } from '../../GlobalStyles';

export const AddCost = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // const [primaryCatId, setPrimaryCatId] = useState('');
  // const [secondaryCatId, setSecondaryCatId] = useState('');
  const [description, setDescription] = useState('');

  // const styles = {
  //   form: tw`bg-white rounded-lg my-4 p-4`,
  // };

  return (
    <div>
      <Header />

      <div tw='w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-4/12 mx-auto my-5'>

        <PageTitle>Add new Cost</PageTitle>

        <form css={gStyles.card}>
          <div>
            <label css={gStyles.label}>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>

          <div>
            <label css={gStyles.label}>Amount</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>

          <div>
            <label css={gStyles.label}>Date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          <div>
            <label css={gStyles.label}>Description</label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </div>

          <button css={[gStyles.btn, gStyles.primaryBtn]}>Save</button>
        </form>

      </div>
    </div>
  );
};

export default AddCost;
