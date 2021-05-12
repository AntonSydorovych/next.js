import Link from 'next/link';

export default function A({ href, text }) {
    return (
        <>
            <Link href={href} >
                <a className={styles.link}>{text}</a>
            </Link>
        </>
    )
}
