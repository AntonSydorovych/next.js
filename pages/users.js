import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
    return (
        <MainContainer keywords='Users' >
            <div>
                <ul>
                    {users.map(user => {
                        return (
                            <li key={user.id}>
                                <div>
                                    <Link href={`/users/${user.id}`}>
                                        <a className='userInList'>{user.name}</a>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </MainContainer>
    )
}

export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: { users }, // will be passed to the page component as props
    }
}
