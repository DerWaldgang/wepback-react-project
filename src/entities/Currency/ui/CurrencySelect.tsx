import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: CurrencyEnum;
    onChange?: (value: CurrencyEnum) => void;
    isReadMode?: boolean;
}

const options = [
  { value: CurrencyEnum.BTC, content: CurrencyEnum.BTC },
  { value: CurrencyEnum.ETH, content: CurrencyEnum.ETH },
  { value: CurrencyEnum.USDC, content: CurrencyEnum.USDC },
  { value: CurrencyEnum.USDT, content: CurrencyEnum.USDT },
];

export const CurrencySelect = memo(({
  className, value, onChange, isReadMode,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onSelect = useCallback((value: string) => {
    onChange?.(value as CurrencyEnum);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите валюту')}
      options={options}
      value={value}
      onChange={onSelect}
      isReadMode={isReadMode}
    />
  );
});
