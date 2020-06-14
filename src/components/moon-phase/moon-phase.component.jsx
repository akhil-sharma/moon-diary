import React from 'react';

import {calculateMoonPhase} from '../../utils/common-functions';

import './moon-phase.styles.scss';

const IMAGE_LOCATION_PREFIX = `./resources/moon_phase_images/`;

const MoonPhase = () => {
    const today = new Date();
    const year  = today.getFullYear()
    const month = today.getMonth() + 1
    const date  = today.getDate()
    const moonPhaseNumber = calculateMoonPhase(year, month, date)
    const imageLocation = `${IMAGE_LOCATION_PREFIX}${moonPhaseNumber}.jpg`;

    console.log("imageLocation: ", imageLocation )
    return(
        <div className="MoonPhaseContainer">
            <p>
                Date: {date} - {month} - {year} <br/>
                Moon Phase: {moonPhaseNumber}
            </p>
            <br/>
            <p>
                <img className="moonImage" src={imageLocation} alt=''/>
            </p>
        </div>
    )
}

export default MoonPhase;

