import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

interface FloatBtnProps {
  children: JSX.Element;
}

export const FloatBtn = (props: FloatBtnProps) => {
  return (
    <button tw="bg-purple-700 text-white hover:bg-purple-900 transition-all p-4
      rounded-full fixed right-6 bottom-6 w-16 h-16 flex justify-center items-center">
      {props.children}
    </button>
  );
};