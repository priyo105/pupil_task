import React from 'react';
import { useLocation } from 'react-router-dom';
import { PupilProps } from '../Types/Pupil.tsx';
import RoundedAvatar from '../Components/RoundedAvatar.tsx';
import '../styles/Details.css';

function PupilDetails() {
    const location = useLocation();
    const pupilData = location.state as PupilProps; // Adjust the type as needed

    return (
        <div className='detailsContainer'>
            <div className='detailsContent'>
                <div className='avatarContainer'>
                    <RoundedAvatar src={pupilData.randomPeople + ""} size='200px' alt='' />
                </div>
                <div className='detailsInfo'>
                    <h3>Full Name: <span className='highlight'>{pupilData.pupil.foreName} {pupilData.pupil.surName}</span></h3>
                    <h3>Age: <span className='highlight'>27</span></h3>
                    <h3>Student Id: <span className='highlight'>{pupilData.pupil._id}</span></h3>
                    <h3>Form: <span className='highlight'>{pupilData.pupil.form}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default PupilDetails;
