import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import cStyles from '../../CommonStyles';

interface FieldProps {
  type: string;
  label: string;
  disabled: boolean;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: (value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: Array<any>;
  keyField?: string;
  valueField?: string;
}

export const Field = (props: FieldProps) => {

  const { type, label, disabled = false, value, setValue, items, keyField, valueField } = props;
  const VALID_FIELD_TYPES = ["text", "number", "date", "checkbox", "select"];
  const isInvalidType = !VALID_FIELD_TYPES.includes(type);

  return (
    <div css={cStyles.field}>
      <label css={cStyles.label}>{label}</label>
      {
        type === 'checkbox' && (
          <div  css={cStyles.input}>
            <input type="checkbox"
              checked={value === "true"}
              onChange={e => setValue(e.target.checked)}
              disabled={disabled}
            />
          </div>
        )
      }
      {
        type === 'select' && (
          <select css={cStyles.input} onChange={setValue} disabled={disabled}>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              items && keyField && valueField && items.map((item: any, index: number) => (
                <option key={index} value={item[keyField]}>{item[valueField]}</option>
              ))
            }
          </select>
        )
      }
      {
        type !== 'checkbox' && type !== "select" && (
          <input type={type} css={cStyles.input}
            value={isInvalidType ? "Invalid Field Type" : value}
            onChange={e => setValue(e.target.value)}
            disabled={isInvalidType || disabled}
          />
        )
      }
    </div>
  );
};
