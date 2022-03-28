import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import cStyles from '../../CommonStyles';

interface PaginatorProps {
  totalCount: number;
  page: number;
  setPage: (value: number) => void;
}

export const Paginator = (props: PaginatorProps) => {
  // const [page, setPage] = useState(1);
  const { totalCount, page, setPage } = props;
  
  const firstPage = () => {
    setPage(1);
  };

  const prevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const nextPage = () => {
    const MAX_PAGE = Math.ceil(totalCount / 10);
    setPage(Math.min(MAX_PAGE, page + 1));
  };

  const lastPage = () => {
    const MAX_PAGE = Math.ceil(totalCount / 10);
    setPage(MAX_PAGE);
  };

  return (
    <div tw='mx-auto flex justify-center items-center gap-4 my-2'>

      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={firstPage}>
        <svg xmlns="http://www.w3.org/2000/svg" tw="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>

      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={prevPage}>
        <svg xmlns="http://www.w3.org/2000/svg" tw="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <span>{page} / {Math.ceil(totalCount / 10)}</span>

      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={nextPage}>
        <svg xmlns="http://www.w3.org/2000/svg" tw="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={lastPage}>
        <svg xmlns="http://www.w3.org/2000/svg" tw="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
};
