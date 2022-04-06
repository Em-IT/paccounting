import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import CostCard from './CostCard';
import CostTableRow from './CostTableRow';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/LoadingSpinner';
import PageTitle from '../../components/PageTitle';
import Paginator from '../../components/Paginator';
import { FloatAddBtn } from '../../components/FloatAddBtn/FloatAddBtn';

import ICost from '../../types/ICost';
import { useAutoApi } from '../../helpers/apiTools';
// import cStyles from '../../CommonStyles';

const CostsList = () => {
  const [page, setPage] = useState(1);

  const { dataArray: costs, totalCount, dataReady, isLoading, errorMessage } = 
  useAutoApi<ICost>(
    '/my-costs/' + page,
    null,
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );
  console.log('re-render');

  // TODO: read currency from api
  return (
    <>
      <Header />

      <div tw='w-11/12 md:w-10/12 lg:w-10/12 mx-auto my-5'>

        <PageTitle>Costs</PageTitle>

        <div>

          {!isLoading && errorMessage && <span>Error: {errorMessage}</span>}

          <div tw='md:hidden'>
            {isLoading && <LoadingSpinner />}

            {dataReady && costs.map((cost: ICost, index: number) => (
              <CostCard key={index} cost={cost} />
            ))}
          </div>

          <table tw='w-full bg-white rounded-lg hidden md:block'>
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Title</th>
                <th style={{ width: '12%' }}>Amount</th>
                <th style={{ width: '13%' }}>Date</th>
                <th style={{ width: '10%' }}>Primary Cat</th>
                <th style={{ width: '10%' }}>Secondary Cat</th>
                <th style={{ width: '10%' }}>Tags</th>
                <th style={{ width: '3%' }}>Is Unexpected</th>
                <th style={{ width: '16%' }}>Description</th>
                <th style={{ width: '11%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <tr><td colSpan={100}><LoadingSpinner /></td></tr>}

              {dataReady && costs.map((cost: ICost, index: number) => (
                <CostTableRow key={index} cost={cost} />
              ))}
            </tbody>
          </table>

          <Paginator totalCount={totalCount} page={page} setPage={setPage} />
          
          <FloatAddBtn />

        </div> {/* Container */}
      </div>
    </>
  );
};

export default CostsList;
