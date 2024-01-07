import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum ThemeInput {
  PRIMARY = 'primary',
  INVERTED_PRIMARY = 'inverted'
}

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number,
    onChange?: (value: string) => void,
    autofocus?: boolean;
    theme?: ThemeInput
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    theme = ThemeInput.PRIMARY,
    readOnly,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [carriagePosition, setCarriagePosition] = useState(0);

  const mods: Mods = {
    [styles[theme]]: true,
    [styles.readonly]: readOnly,
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCarriagePosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCarriagePosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autofocus]);
  const isCarretVisible = isFocused && !readOnly;
  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.carriageWrapper}>
        <input
          ref={ref}
          className={classNames(styles.Input, {}, [])}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isCarretVisible && (
        <span
          className={classNames(styles.carriage, {}, [])}
          style={{ left: `${carriagePosition * 9.5}px` }}
        />
        )}
      </div>
    </div>
  );
});
