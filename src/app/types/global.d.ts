

// нужно чтобы ts не ругался на import styles from 'name.module.scss'
// и теперь ts умеет подсказывать что находится внутри styles
declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }