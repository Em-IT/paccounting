import React from 'react';
import { useHistory } from "react-router-dom";
import FloatBtn from '../FloatBtn';

export const FloatAddBtn = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/add-cost');
  };

  return (
    <FloatBtn onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </FloatBtn>
  );
};