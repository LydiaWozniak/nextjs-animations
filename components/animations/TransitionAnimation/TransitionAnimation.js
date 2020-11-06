import styles from './Transition.module.css';
import { Transition, CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function TransitionAnimation() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <CSSTransition in={inProp} timeout={2000} classNames={{
                enter: styles['my-node-enter'],
                enterActive: styles['my-node-enter-active'],
                exit: styles['my-node-exit'],
                exitActive: styles['my-node-exit-active'],
            }}>
                <div className={styles.div}>
                </div>
            </CSSTransition>
            <button type="button" onClick={() => setInProp(!inProp)}>
                Click to Enter
            </button>
        </div>
    );
}
