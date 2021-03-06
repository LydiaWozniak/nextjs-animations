import styles from './Layout.module.css';
import Gradient from '../animations/Gradient';
import Fill from '../animations/Fill';
import Opacity from '../animations/Opacity';
import Translate from '../animations/Translate';
import Rotate from '../animations/Rotate';
import Scale from '../animations/Scale';
import TransitionAnimation from '../animations/TransitionAnimation';
import ReactReveal from '../animations/ReactReveal';
import LottieAnimation from '../animations/LottieAnimation';
import { useState } from 'react';

export default function Layout() {

    return (
        <div className={styles.div}>
            <div className={'pulse-animation'} >
                <h4>background-color</h4>
                <Gradient />
            </div>
            <div className={'fill-animation'} >
                <h4>transforming scale, background-color, border-radius</h4>
                <Fill />
            </div>
            <div className={'opacity-animation'} >
                <h4>opacity</h4>
                <Opacity />
            </div>
            <div className={'translate-animation'} >
                <h4>Translate</h4>
                <Translate />
            </div>
            <div className={'rotate-animation'} >
                <h4>Rotate</h4>
                <Rotate />
            </div>
            <div className={'scale-animation'} >
                <h4>Scale</h4>
                <Scale />
            </div>
            <div className={'transition-animation'} >
                <h4>Transition</h4>
                <TransitionAnimation />
            </div>
            <div className={'reveal-animation'}>
                <h4>React Reveal</h4>
                <ReactReveal />
            </div>
            <div className={'lottie-animation'}>
                <h4>Lottie</h4>
                <LottieAnimation />
            </div>

        </div>
    )

}