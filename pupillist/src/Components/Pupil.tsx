import React from 'react'
import '../styles/pupil.css'
import RoundedAvatar from './RoundedAvatar.tsx';
import { Link } from 'react-router-dom';
import { PupilProps } from '../Types/Pupil';

function PupilView(pupil: PupilProps) {
  return (
    <div>
      <div className='pupilContainer'>
        <Link to="/pupil/1" state={pupil}>
          <div className='pupilHeader'>
            <p>{pupil.index + " . "}</p>
            <RoundedAvatar src={pupil.randomPeople + ""} alt={''} />
            <h3>{pupil.pupil.foreName + " " + pupil.pupil.surName}</h3>
          </div>
        </Link>

        <p className='pupilFormVal'>{pupil.pupil.form}</p>
        <h3 className={`pupilStatus ${pupil.pupil.send ? 'sent' : 'notSent'}`}>
          {pupil.pupil.send ? '✔' : '✘'}
        </h3>
      </div>
      <hr className='separator' />
    </div>
  )
}

export default PupilView
