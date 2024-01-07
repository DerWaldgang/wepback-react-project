import {
  ChangeEvent, memo,
  useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    isReadMode?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    isReadMode,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => options?.map((option) => (
    <option
      className={styles.option}
      value={option.value}
      key={option.value}
    >
      {option.content}
    </option>
  )), [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(styles.Select, mods, [className])}>
      {label && (
        <span className={styles.label}>
          {`${label}>`}
        </span>
      )}
      <select
        disabled={isReadMode}
        className={styles.component}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
