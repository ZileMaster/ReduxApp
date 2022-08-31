import ActionTypes from './constants';

const setUsers = (users) => ({
     type : ActionTypes.SET_USERS,
      payload: users,
    });

export default setUsers