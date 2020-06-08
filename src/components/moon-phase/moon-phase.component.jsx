import React from 'react';

import {calculateMoonPhase} from '../../utils/common-functions';
import {phaseImageLocation} from '../../utils/constants';

const IMAGE_LOCATION_PREFIX = `./resources/`;

const MoonPhase = () => {
    const today = new Date();
    const year  = today.getFullYear()
    const month = today.getMonth() + 1
    const date  = today.getDate()
    const moonPhase = calculateMoonPhase(year, month, date)
    let imageLocation = undefined;
    switch (true) {
        case (moonPhase >= 29 && moonPhase <= 0):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['newMoon']}`;
            break;

        case (moonPhase > 0 && moonPhase <= 4):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['waningCrescent']}`;
            break;
        
        case (moonPhase > 4 && moonPhase <= 7):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['thirdQuarter']}`;
            break;

        case (moonPhase > 7 && moonPhase <= 11):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['waningGibbous']}`;
            break;
        
        case (moonPhase > 11 && moonPhase <= 15):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['fullMoon']}`;
            break;

        case (moonPhase > 15 && moonPhase <= 19):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['waxingGibbous']}`;
            break;

        case (moonPhase > 19 && moonPhase <= 22):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['firstQuarter']}`;
            break;

        case (moonPhase > 22 && moonPhase < 29):
            imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['waxingCrescent']}`;
            break;

        default:
            imageLocation = imageLocation = `${IMAGE_LOCATION_PREFIX}${phaseImageLocation['fullMoon']}`;
            break;

    }
    console.log(`imageLocation: `, imageLocation);
    return(
        <div className="MoonPhaseContainer">
            <p>
                Date: {date} - {month} - {year}
            </p>
            <br/>
            <p>
                Moon Phase: {moonPhase}
                <img src={imageLocation} alt=''/>
            </p>
        </div>
    )
}

export default MoonPhase;

