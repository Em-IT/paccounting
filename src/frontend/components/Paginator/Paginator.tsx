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
      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={firstPage}>First Page</button>
      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={prevPage}>Prev Page</button>
      <span>{page} / {Math.ceil(totalCount / 10)}</span>
      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={nextPage}>Next Page</button>
      <button css={[cStyles.btn, cStyles.primaryBtn]} onClick={lastPage}>Last Page</button>
    </div>
  );
};
