import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClassName', {}, [])).toBe('someClassName');
    });

    test('with additional classname', () => {
        const expected = 'someClassName class1 class2';
        expect(classNames('someClassName', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods classnames true', () => {
        const expected = 'someClassName class1 class2 hover focus';
        expect(classNames('someClassName', { hover: true, focus: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods classnames false', () => {
        const expected = 'someClassName class1 class2';
        expect(classNames('someClassName', { hover: false, focus: false }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods classnames false and true', () => {
        const expected = 'someClassName class1 class2 hover';
        expect(classNames('someClassName', { hover: true, focus: false }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods classnames undefined', () => {
        const expected = 'someClassName class1 class2';
        expect(classNames('someClassName', { hover: undefined, focus: false }, ['class1', 'class2'])).toBe(expected);
    });
});
