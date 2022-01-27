import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';

import navigationItems, { INavigationItem } from './navigationItems';

interface IHeader {
  title: string;
}

const styles = {
  navBar: tw`flex flex-row text-sm text-purple-800`,
  navItem: tw`flex flex-row items-center`,
  navItemIcon: tw`w-6 h-6 mx-2`,
};

// TODO: link nav items to pages
// TODO: show nav items only in desktop env
export const Header = ({ title = "Header" } : IHeader) => {
  return (
    <div tw="px-10 py-4 bg-indigo-100 shadow-md flex flex-row align-middle">
      <div data-test="header-title" tw='text-2xl'>{title}</div>
      
      <ul css={[styles.navBar]}>
        {
          navigationItems.map((ni: INavigationItem, index: number) => (
            <li key={index} css={styles.navItem}>
              <div css={styles.navItemIcon}>
                {ni.icon}
              </div>
              {ni.title}
            </li>
          ))
        }
      </ul>
    </div>
  );
};
