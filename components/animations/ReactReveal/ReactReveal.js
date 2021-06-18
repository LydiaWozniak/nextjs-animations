import Zoom from 'react-reveal/Zoom';
import { useState, Fragment, } from 'react'

export default function ReactReveal() {

    let [appear, setAppear] = useState(true);

    const replayAnimation = () => {
        setAppear(!appear)
    }

    return (
        <>
            <Zoom when={appear}>
                <p>Hello World</p>
            </Zoom>
            <button onClick={replayAnimation}>{appear ? "Hide" : "Replay"}</button>
        </>
    )
}