import React from 'react';
import style from './burger.less';

const Burger = (props) => {
    return (
        <div className={style['box']}>
            <div className={style['bread-top']}>
                <div className={style['seeds']}></div>
                <div className={style['seeds2']}></div>
            </div>
            <div className={style['salad']}></div>
            <div className={style['salad']}></div>
            <div className={style['bacon']}></div>
            <div className={style['cheese']}></div>
            <div className={style['cheese']}></div>
            <div className={style['meat']}></div>
            <div className={style['meat']}></div>
            <div className={style['bread-bottom']}></div>
        </div>
    );
};

export default Burger;