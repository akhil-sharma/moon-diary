//Return a single value - the phase day (0 to 29, where 0=new moon, 15=full etc.)
export const calculateMoonPhase = (year,month,day) => {
    let n = Math.floor(12.37 * (year -1900 + ((1.0 * month - 0.5)/12.0)));
    let RAD = 3.14159265/180.0;
    let t = n / 1236.85;
    let t2 = t * t;
    let as = 359.2242 + 29.105356 * n;
    let am = 306.0253 + 385.816918 * n + 0.010730 * t2;
    let xtra = 0.75933 + 1.53058868 * n + ((1.178e-4) - (1.55e-7) * t) * t2;
    xtra += (0.1734 - 3.93e-4 * t) * Math.sin(RAD * as) - 0.4068 * Math.sin(RAD * am);
    let i = (xtra > 0.0 ? Math.floor(xtra) :  Math.ceil(xtra - 1.0));
    let j1 = julday(year,month,day);
    let jd = (2415020 + 28 * n) + i;
    return (j1-jd + 30)%30;
};

// Calculating the Julian-day-number
const julday = (year, month, day) => {
    if (year < 0) { year ++; }
    let jy = parseInt(year);
    let jm = parseInt(month) +1;
    if (month <= 2) {jy--;	jm += 12;	} 
    let jul = Math.floor(365.25 *jy) + Math.floor(30.6001 * jm) + parseInt(day) + 1720995;
    if (day+31*(month+12*year) >= (15+31*(10+12*1582))) {
        let ja = Math.floor(0.01 * jy);
        jul = jul + 2 - ja + Math.floor(0.25 * ja);
    }
    return jul;
};