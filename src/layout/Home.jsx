import React from 'react';
import TotalMoney from '../pages/cards/TotalMoney';
import ShopIncome from '../pages/cards/ShopIncome';
import OutsideIncome from '../pages/cards/OutsideIncome';
import FamilyCost from '../pages/cards/FamilyCost';
import PersonalCost from '../pages/cards/PersonalCost';
import RentList from '../pages/cards/RentList';
import AddMoney from '../pages/home/AddMoney';
import MoneyItemList from '../pages/home/MoneyItemList';

const Home = () => {
    return (
        <div className='flex justify-center gap-4 flex-wrap'>
            <TotalMoney />
            <ShopIncome />
            <OutsideIncome />
            <RentList />
            <FamilyCost />
            <PersonalCost />
            <AddMoney />
            <MoneyItemList />
        </div>
    );
};

export default Home;