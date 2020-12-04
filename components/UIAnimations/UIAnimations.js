import styles from './UIAnimations.module.css';
import Button from '../animations/Button'

export default function UIAnimations() {

    return (
        <div className={styles.div}>
            <div className={'button'} >
                <h4>button</h4>
                <Button></Button>

            </div>
            <div className={'input'} >
                <h4>input</h4>

            </div>
            <div className={'skeleton'} >
                <h4>skeleton</h4>

            </div>
            <div className={'list'} >
                <h4>list</h4>

            </div>
        </div>
    )

}