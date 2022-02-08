import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import CostCard from './CostCard';
import CostTableRow from './CostTableRow';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/LoadingSpinner';
import PageTitle from '../../components/PageTitle';

import ICost from '../../types/ICost';
import { useAutoApi } from '../../helpers/apiTools';

const CostsList = () => {

  const { dataArray: costs, dataReady, isLoading, errorMessage } = 
  useAutoApi<ICost>(
    '/my-costs',
    null,
    { 'userId': '61e08a74927d9e1bc3cfbe79' },
  );

  // TODO: read currency from api
  return (
    <>
      <Header />

      <div tw='w-11/12 md:w-10/12 lg:w-10/12 2xl:w-9/12 mx-auto my-5'>

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
                <th style={{ minWidth: '200px' }}>Title</th>
                <th style={{ minWidth: '130px' }}>Amount</th>
                <th style={{ minWidth: '160px' }}>Date</th>
                <th style={{ minWidth: '110px' }}>Primary Cat</th>
                <th style={{ minWidth: '110px' }}>Secondary Cat</th>
                <th style={{ minWidth: '150px' }}>Tags</th>
                <th style={{ minWidth: '30px' }}>Is Unexpected</th>
                <th style={{ minWidth: '200px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <tr><td colSpan={100}><LoadingSpinner /></td></tr>}

              {dataReady && costs.map((cost: ICost, index: number) => (
                <CostTableRow key={index} cost={cost} />
              ))}
            </tbody>
          </table>

        </div> {/* Container */}
      </div>
    </>
  );
};

export default CostsList;
