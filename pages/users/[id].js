import { useRouter } from "next/router";
import A from '../../components/A';
import styles from '../../styles/user.module.scss';
import MainContainer from '../../components/MainContainer';

export default function User({ user }) {

    let { query } = useRouter();

    return (
        <MainContainer keywords = 'user' >
            <div className={styles.user} key={query.id} >
                <h1> User with id {' ' + user.id}</h1>
                <div>
                    User's name is: {user.name}
                </div>
            </div>
        </MainContainer>
    )
}


export async function getServerSideProps({ params }) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json();

    return {
        props: { user }, // will be passed to the page component as props
    }
}
