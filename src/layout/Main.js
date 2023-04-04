import React from 'react';
import { Outlet } from 'react-router-dom';
import Counter from '../component/Counter/Counter';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Counter></Counter>
        </div>
    );
};

export default Main;