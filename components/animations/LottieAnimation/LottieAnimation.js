import Lottie from 'react-lottie';
import * as animationData from './heart.json';
import { useState } from 'react';
import styles from './LottieAnimation.module.css';


export default function LottieAnimation() {
    const [isStopped, setIsStopped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                isStopped={isStopped}
                isPaused={isPaused}
            />
            <button className={styles.buttonStyle} onClick={() => setIsStopped(true)}>stop</button>
            <button className={styles.buttonStyle} onClick={() => setIsStopped(false)}>play</button>
            <button className={styles.buttonStyle} onClick={() => setIsPaused(!isPaused)}>pause</button>
        </div>
    )
}