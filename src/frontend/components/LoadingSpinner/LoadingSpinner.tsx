import React from "react";
import { Bars } from "react-loader-spinner";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
// import '../lib/loader/css/react-spinner-loader.css';
// import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import '~react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface ILoadingSpinner {
  color?: string;
  size?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  style?: any;
}

export const LoadingSpinner = ({ color = "#7e57c2", size = 80,
  fullWidth = true, fullHeight = true, style }: ILoadingSpinner): JSX.Element => (

  <div css={[tw`flex justify-center items-center`, fullWidth && tw`w-full`,
    fullHeight && tw`h-full`]} style={style}>
    {/* <Triangle ariaLabel="loading-indicator" color={color} width={size} height={size} /> */}
    <Bars width={size} color={color} ariaLabel="loading" />
  </div>

);