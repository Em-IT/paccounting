import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

interface PageTitlePropTypes {
  children: JSX.Element | string;
}

export const PageTitle = ({ children }: PageTitlePropTypes) => {
  return (
    <h1 tw='mx-auto my-5 text-2xl font-bold text-purple-600 text-center'>
      {children}
    </h1>
  );
};
