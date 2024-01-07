import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CountryEnum } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: CountryEnum;
    onChange?: (value: CountryEnum) => void;
    isReadMode?: boolean;
}

const options = [
  { value: CountryEnum.Armenia, content: CountryEnum.Armenia },
  { value: CountryEnum.Russia, content: CountryEnum.Russia },
  { value: CountryEnum.Belarus, content: CountryEnum.Belarus },
  { value: CountryEnum.Kazakhstan, content: CountryEnum.Kazakhstan },
  { value: CountryEnum.Ukraine, content: CountryEnum.Ukraine },
  { value: CountryEnum.Japan, content: CountryEnum.Japan },
  { value: CountryEnum.America, content: CountryEnum.America },
];

export const CountrySelect = memo(({
  className, value, onChange, isReadMode,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onSelect = useCallback((value: string) => {
    onChange?.(value as CountryEnum);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите страну')}
      options={options}
      value={value}
      onChange={onSelect}
      isReadMode={isReadMode}
    />
  );
});
