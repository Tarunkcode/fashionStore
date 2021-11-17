// function that return obj ,each obj is in correct format that the action is expected to be.

export const setCurrentUser = user => ({
type : 'SET_CURRENT_USER',
payload : user
});