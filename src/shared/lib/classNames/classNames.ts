type Mods = Record<string, boolean | string>;

export const classNames = (
    className: string,
    mods?: Mods,
    additional?: string[],
): string => [
    className,
    ...additional.filter(Boolean),
    Object.entries(mods).filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className),
].join(' ');
