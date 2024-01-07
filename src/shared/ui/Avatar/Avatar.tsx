import {
  CSSProperties,
  useMemo,
} from 'react';
import ImagePlaceholder from 'shared/assets/icons/user-32-32.png';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
  className, src, size, alt,
}: AvatarProps) => {
  const sizeStyles = useMemo<CSSProperties>(() => ({
    width: size || 36,
    height: size || 36,
  }), [size]);

  return (
    <img
      src={src || ImagePlaceholder}
      alt={alt}
      style={sizeStyles}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};
