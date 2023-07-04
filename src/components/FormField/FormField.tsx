import { TextField } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

type Props = {
  value: string | number;
  placeholder: string;
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabledVal?: boolean;
};

export const FormField: React.FC<Props> = ({
  value,
  placeholder,
  name,
  type,
  handleChange,
  disabledVal,
}) => (
  <div className="field">
    <div className="control">
      <TextField
        className={classNames(
          'input',
          { 'is-success': value },
          { 'is-danger': !value }
        )}
        type={type}
        label={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabledVal}
        variant="filled"
        fullWidth
        margin="normal"
        required
      />
    </div>
  </div>
);
