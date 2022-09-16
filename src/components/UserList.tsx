import React, {useEffect} from 'react';
// import {useSelector} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {

    const {users, loading, error} = useTypeSelector(state => state.user);
    // const dispatch = useDispatch();
    const {fetchUsers} = useActions();

    useEffect( () => {
        // @ts-ignore
        // dispatch(fetchUsers());
        fetchUsers();
    }, []);

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>Error!</h1>
    }



    return (

        <div>
            {
                users.map(user => <div key={user.id}>
                    {user.name}
                </div>)
            }
        </div>
    );
};

export default UserList;