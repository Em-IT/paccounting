import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

export const gStyles = {
  card: tw`bg-white rounded-lg my-4 p-4`,
  label: tw`w-24 inline-block text-gray-700`,
  btn: tw`rounded-md m-2 px-3 py-1`,
  primaryBtn: tw`bg-purple-700 text-white`,
};

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    background-color: #eee;
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
