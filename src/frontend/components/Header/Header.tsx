import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import { Link } from 'react-router-dom';

import navigationItems, { INavigationItem } from './navigationItems';

interface IHeader {
  title: string;
}

const styles = {
  headerBar: tw`px-10 py-4 bg-white shadow-md flex flex-row align-middle`,
  appTitle: tw`text-2xl text-purple-800 mr-6`,
  navBar: tw`flex flex-row items-center text-sm`,
  navItem: tw`flex flex-row items-center text-gray-600 transition-all duration-200
    hover:text-purple-700 hover:font-bold`,
  navItemIcon: tw`w-6 h-6 mx-2`,
};

// TODO: show nav items only in desktop env
export const Header = ({ title = "Header" } : IHeader) => {
  return (
    <div css={styles.headerBar}>
      
      <div data-test="header-title" css={styles.appTitle}>PAccounting</div>
      
      <ul css={[styles.navBar]}>
        {
          navigationItems.map((ni: INavigationItem, index: number) => (
            <li key={index}>
              <Link to={ni.link} css={styles.navItem}>
                <div css={styles.navItemIcon}>
                  {ni.icon}
                </div>
                {ni.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
