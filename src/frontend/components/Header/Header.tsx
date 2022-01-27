import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';

interface IHeader {
  title: string;
}

export const Header = ({ title = "Header" } : IHeader) => {
  return (
    <div tw="px-10 py-4 bg-indigo-100 text-2xl shadow-md">
      <div data-test="header-title">{title}</div>
      
    </div>
  );
};
