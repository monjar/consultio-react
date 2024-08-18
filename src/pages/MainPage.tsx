import React from 'react';
import './MainPage.css';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/MainPageHeader';
import Services from '../components/Services';

function MainPage() {


    return (
        <>

            <div className="background">
                <NavBar />
                <MainPageHeader />

            </div>
            <Services />


        </>
    )

}


export default MainPage