import styles from './Layout.module.css';
import Gradient from '../animations/Gradient';
import Fill from '../animations/Fill';
import Opacity from '../animations/Opacity';
import Translate from '../animations/Translate';
import Rotate from '../animations/Rotate';

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

        </div>
    )

}