import React, { ChangeEvent, useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import LoadingSpinner from '../../components/LoadingSpinner';

import cStyles from '../../CommonStyles';
import { useAutoApi, useManualApi } from '../../helpers/apiTools';
import { getSelectedItem } from '../../helpers/selectTools';
// import { Redirect } from 'react-router-dom';

interface ISecondaryCat {
  _id: string;
  title: string;
}

interface IPrimaryCat {
  _id: string;
  title: string;
  subCategories?: Array<ISecondaryCat>;
}

export const AddCost = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isUnexpected, setIsUnexpected] = useState(false);
  const [primaryCat, setPrimaryCat] = useState<IPrimaryCat>();
  const [secondaryCat, setSecondaryCat] = useState<ISecondaryCat>();
  const [description, setDescription] = useState('');

  const [primaryCats, setPrimaryCats] = useState<Array<IPrimaryCat>>([]);
  const [secondaryCats, setSecondaryCats] = useState<Array<ISecondaryCat>>([]);

  const { data: me, dataReady, isLoading: meIsLoading, errorMessage } = 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useAutoApi<any>(
    '/me',
    null,
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );

  useEffect(() => {

    if (dataReady) {
      setPrimaryCats(me.categories);
      setSecondaryCats(me.categories[0].subCategories);
      
      const firstPC: IPrimaryCat = me.categories[0];
      setPrimaryCat({
        _id: firstPC._id,
        title: firstPC.title,
      });
  
      setSecondaryCat({
        _id: firstPC.subCategories && firstPC.subCategories[0]._id || '',
        title: firstPC.subCategories && firstPC.subCategories[0].title || '',
      });

    } else if (errorMessage) {
      toast.error(errorMessage);
    }

  }, [dataReady]);
 
  const { isLoading, callApi } = useManualApi<string>('/cost',
    {
      title,
      amount,
      date,
      description,
      isUnexpected,
      primaryCat,
      secondaryCat,
      userId: '61e08a74927d9e1bc3cfbe79',
    },
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );
  // console.log('data=', data, dataReady, isLoading, errorMessage);

  // const styles = {
  //   form: tw`bg-white rounded-lg my-4 p-4`,
  // };

  const saveCost = async (isRedirect: boolean) => {
    // console.log('save');

    const { data, errorMessage } = await callApi();
    
    if (data) {
      toast.success("The cost saved successfully 👍", {
        onClose: () => {
          if (isRedirect) {
            location.href = '/costs';
          // history.push("/home");
          // return <Redirect to='/my-costs'/>;
          } else {
            resetForm();
          }
        },
      });
    } else if (errorMessage) {
      toast.error("Error in save process: " + errorMessage);
    }
  };

  const resetForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
    setIsUnexpected(false);
    setDescription('');

    setPrimaryCat({
      _id: primaryCats[0]._id,
      title: primaryCats[0].title,
    });

    const firstPC = primaryCats[0];
    setSecondaryCat({
      _id: firstPC.subCategories && firstPC.subCategories[0]._id || '',
      title: firstPC.subCategories && firstPC.subCategories[0].title || '',
    });
  };

  const handlePriCatChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { key, text } = getSelectedItem(e);
    const sc: IPrimaryCat | undefined = primaryCats.find((c: IPrimaryCat) => c._id === key);
    setSecondaryCats(sc?.subCategories || []);
    setPrimaryCat({ _id: key, title: text });
  };

  const handleSecCatChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { key, text } = getSelectedItem(e);
    setSecondaryCat({ _id: key, title: text });
  };

  return (
    <div>
      <Header />

      <div tw='w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-4/12 mx-auto my-5'>

        <PageTitle>Add new Cost</PageTitle>

        <form css={[cStyles.card, tw`relative`]} onSubmit={(e) => e.preventDefault()}>

          { (isLoading || meIsLoading) && <LoadingSpinner isCover style={{
            margin: '-1rem',
            borderRadius: '0.5rem',
          }} />}

          <div>
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
              <label css={cStyles.label}>Is Unexpected</label>
              <div  css={cStyles.input}>
                <input type="checkbox"
                  checked={isUnexpected}
                  onChange={e => setIsUnexpected(e.target.checked)} />
              </div>
            </div>

            <div css={cStyles.field}>
              <label css={cStyles.label}>Primary Categories</label>
              <select css={cStyles.input} onChange={handlePriCatChange}>
                {
                  primaryCats.map((cat: IPrimaryCat, index: number) => (
                    <option key={index} value={cat._id}>{cat.title}</option>
                  ))
                }
              </select>
            </div>

            <div css={cStyles.field}>
              <label css={cStyles.label}>Secondary Categories</label>
              <select css={cStyles.input} onChange={handleSecCatChange}>
                {
                  secondaryCats.map((cat: ISecondaryCat, index: number) => (
                    <option key={index} value={cat._id}>{cat.title}</option>
                  ))
                }
              </select>
            </div>

            <div css={cStyles.field}>
              <label css={cStyles.label}>Description</label>
              <input type="text" css={cStyles.input}
                value={description} onChange={e => setDescription(e.target.value)} />
            </div>

            <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={() => saveCost(false)}>
              Save and add new item
            </button>

            <button css={[cStyles.btn]} onClick={() => saveCost(true)}>
              Save
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddCost;
