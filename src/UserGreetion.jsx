function UserGreeting(props){
   
    if(props.isLoggedIn){
        return <h2>Welcome {props.userName}</h2>
    }else{
        return <h2>Please Login to continue</h2>
    }
   
}

export default UserGreeting