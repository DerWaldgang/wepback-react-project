import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss' 

interface SidebarProps {
className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {

    const [collapsed , setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
        <button onClick={() => onToggle()}>toggle</button>
    </div>
}
