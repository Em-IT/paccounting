import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import cStyles from '../../CommonStyles';

interface FieldProps {
  type: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export const Field = (props: FieldProps) => {

  const { type, label, value, setValue } = props;
  const VALID_FIELD_TYPES = ["text", "number", "date"];
  const isInvalidType = !VALID_FIELD_TYPES.includes(type);

  return (
    <div css={cStyles.field}>
      <label css={cStyles.label}>{label}</label>
      <input type={type} css={cStyles.input}
        value={isInvalidType ? "Invalid Field Type" : value}
        onChange={e => setValue(e.target.value)}
        disabled={isInvalidType}
      />
    </div>
  );
};
