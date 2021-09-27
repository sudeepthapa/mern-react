import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../store/slices/serviceSlice';

export default function HomePage() {

    const dispatch = useDispatch();

    const { users, status, errorMessage } = useSelector(state=>state.service)

    React.useEffect(() => {
        dispatch(getAllUsers({id: 21}))
    }, [dispatch]) 
    console.log(status)
    const getUserList = () => {
        return users.map(user=><h2 key={user.id}>{user.name}</h2>)
    }

    if(status === 'processing'){
        return <h1>Loading. Please wait...</h1>
    }
    if(status === 'error'){
        return <h1>{errorMessage}</h1>
    }

    return (
        <div className="main">
            { getUserList() }
        </div>
    )
}
