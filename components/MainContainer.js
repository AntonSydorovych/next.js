import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/MainContainer.module.css'

const MainContainer = ({ children, keywords }) => {
    return (
        <div>
            <Head>
                <title>MyNetwork</title>
                <meta content = 'network' />
            </Head>
            <div>
                <span className={styles.link}>
                    <Link href='/'>
                        <a>Main</a>
                    </Link>
                </span>
                <span className={styles.link}>
                    <Link href='/users'>
                        <a>Users</a>
                    </Link>
                </span>
            </div>
            <div> {children} </div>
        </div>
    )
}

export default MainContainer;
