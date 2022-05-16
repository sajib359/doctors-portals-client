import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            <InfoCard CardTitle="opening Hours" bgclassName="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard CardTitle="Visit Our location" bgclassName="bg-black" img={marker}></InfoCard>
            <InfoCard CardTitle="Contract Us Now" bgclassName="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;