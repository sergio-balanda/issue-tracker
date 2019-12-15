export default{
    loggedIn(state){
        return state.isLoggedIn;
    },

    setUserDetails(state){
        return state.setUserDetails;
    },

    userDetails(state){
        return state.userDetails;
    }
}