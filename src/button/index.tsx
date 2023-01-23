import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './index.css';

// const Button = () => {
//     return <button></button>;
// }
interface buttonProps {
    className?: string;
    type?: 'normal' | 'primary';
    children?: ReactNode;
}



const Button = ( props: buttonProps) => {
    const {className, type = 'normal' , children} = props;

    const cls = classNames({
        'ant-btn': true,
        [`ant-btn-${type}`]: type,
        [className as string]: !!className
    })

    return <button className={cls}>{children}</button>;
}

export default Button;
