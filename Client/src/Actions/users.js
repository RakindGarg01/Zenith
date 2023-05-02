import * as api from '../api/index.js'
import { setCurrentUser } from './currentUser.js'
export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers()
        console.log(data);
        dispatch({ type: 'FETCH_USERS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

