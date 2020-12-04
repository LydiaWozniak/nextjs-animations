import UIAnimations from '../components/UIAnimations';
import Head from 'next/head'
import Link from 'next/link'

export default function Animations() {
    return (
        <div className="container">
            <Head>
                <title>Animations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    React Animations
          </h1>
                <Link href="/info"> Documentation and resources </Link>
                <p>The most performant animations are opacity, translate, rotate, scale</p>

                <UIAnimations />
            </main>
        </div>
    )
}