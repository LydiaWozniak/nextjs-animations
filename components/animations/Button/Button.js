import styles from './Button.module.css';
import { Transition, CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react'



export default function Button() {
    let success = <polyline className="check" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeMiterlimit="10"
        points="70,35 45,65 30,52  " />
    let loading = <circle className={styles.circleSVG} fill="none" stroke="#fff" strokeDasharray="280" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="44" />;

    const [buttonText, setButtonText] = useState('submit')
    const [path, setPath] = useState('');

    const buttonPressed = () => {
        setButtonText('loading')
        setPath(loading)
        setTimeout(function () {
            console.log('setTimeout')
            setButtonText('success')
            setPath(success);
        }, 3000);
    }



    return (
        <div>
            <button className={styles[buttonText] + ' ' + styles.buttonWrapper} onClick={buttonPressed} >
                <svg className={styles.spinnerSVG} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="25px" width="25px"
                    viewBox="0, 0, 100, 100">
                    {path}
                </svg>
                {buttonText}
            </button >

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="25px" width="25px"
                viewBox="0, 0, 100, 100">

                <clipPath id="tick">
                    <path stroke-miterlimit="10" stroke-linecap="round" stroke-width="8" stroke="#7DB0D5" fill="none" class="check" d="M70 35 C61.66 45 53.33 55 45 65 40 60.66 35 56.33 30 52 "></path>
                </clipPath>

                <g clipPath="url(#tick)">
                    <circle id="circle" fill="#000" cx="50" cy="50" r="44" />
                    <use clipPath="url(#tick)" xlinkHref="#circle" fill="red" />
                </g>

            </svg>



        </div >
    )
}


//create a clip path animation for the tick. They can be two separate svgs which are replaced by react...