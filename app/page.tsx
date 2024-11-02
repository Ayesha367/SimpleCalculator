import Head from 'next/head';
import Calculator from '../components/calculator';

export default function Home() {
    return (
        <>
            <Head>
                <title>Simple Calculator App</title>
            </Head>
            <main>
                <h1>Simple Calculator</h1>
                <Calculator />
            </main>
        </>
    );
}
