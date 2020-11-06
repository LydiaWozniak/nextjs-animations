import styles from './Layout.module.css';
import Gradient from '../animations/Gradient';
import Fill from '../animations/Fill';
import Opacity from '../animations/Opacity';

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

        </div>
    )

}