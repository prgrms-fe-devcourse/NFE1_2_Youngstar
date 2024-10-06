import '../styles/css/UserLive.css';
import User from '../types/User';
import useFetchUsers from '../hooks/useFetchUsers';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Follower = React.memo(() => {
    const { data } = useFetchUsers();
    const navigator = useNavigate();
    
    return (
        <div className='follower_area'>
            <ul>
                {
                    data.map((user: User) => (
                        <li key={user._id} onClick={() => navigator(`/mypage/${user._id}`)}>
                            <img src={user.image || ''} />
                            <p>{user.fullName}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
})

export default Follower;