import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import LoadingSpinner from '../../components/LoadingSpinner';

import cStyles from '../../CommonStyles';
import { useManualApi } from '../../helpers/apiTools';
// import { Redirect } from 'react-router-dom';

export const AddCost = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // const [primaryCatId, setPrimaryCatId] = useState('');
  // const [secondaryCatId, setSecondaryCatId] = useState('');
  const [description, setDescription] = useState('');

  const { callApi, data, dataReady, isLoading, errorMessage } = 
    useManualApi<string>(
      '/cost',
      {
        title,
        amount,
        date,
        description,
        isUnexpected: false,
        primaryCat: {
          id: '61e08a74927d9e1bc3cfbe86',
          title: 'Food',
        },
        secondaryCat: {
          id: '61e08a74927d9e1bc3cfbe87',
          title: 'Groceries',
        },
        // isIncome: false,
        userId: '61e08a74927d9e1bc3cfbe79',
      },
      { 'userId': '61e08a74927d9e1bc3cfbe79' },
    );
  console.log('data=', data, dataReady, isLoading, errorMessage);

  // const styles = {
  //   form: tw`bg-white rounded-lg my-4 p-4`,
  // };

  const saveCost = () => {
    console.log('save');

    callApi();
  };

  if (dataReady) {
    toast.success("The cost saved successfully 👍");
    setTimeout(() => {
      // history.push("/home");
      location.href = '/costs';
      // return <Redirect to='/my-costs'/>;
    }, 3000);
  }

  return (
    <div>
      <Header />

      <div tw='w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-4/12 mx-auto my-5'>

        <PageTitle>Add new Cost</PageTitle>

        <form css={[cStyles.card, tw`relative`]} onSubmit={(e) => e.preventDefault()}>

          { !isLoading && <LoadingSpinner isCover style={{
            margin: '-1rem',
            borderRadius: '0.5rem',
          }} />}

          {!isLoading && errorMessage && <span>Error: {errorMessage}</span>}

          { !isLoading && (
            <>
              <div css={cStyles.field}>
                <label css={cStyles.label}>Title</label>
                <input type="text" css={cStyles.input}
                  value={title} onChange={e => setTitle(e.target.value)} />
              </div>

              <div css={cStyles.field}>
                <label css={cStyles.label}>Amount</label>
                <input type="number" css={cStyles.input}
                  value={amount} onChange={e => setAmount(e.target.value)} />
              </div>

              <div css={cStyles.field}>
                <label css={cStyles.label}>Date</label>
                <input type="date" css={cStyles.input}
                  value={date} onChange={e => setDate(e.target.value)} />
              </div>

              <div css={cStyles.field}>
                <label css={cStyles.label}>Description</label>
                <input type="text" css={cStyles.input}
                  value={description} onChange={e => setDescription(e.target.value)} />
              </div>

              <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={saveCost}>
                Save
              </button>
            </>
          )}
        </form>

      </div>
    </div>
  );
};

export default AddCost;
