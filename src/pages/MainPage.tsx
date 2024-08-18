import React from 'react';
import './MainPage.css';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/MainPageHeader';
import Services from '../components/Services';
import Teams from '../components/Teams';

function MainPage() {


    return (
        <>

            <div className="background">
                <NavBar />
                <MainPageHeader />

            </div>
            <Services />

            <Teams />


        </>
    )

}


export default MainPage