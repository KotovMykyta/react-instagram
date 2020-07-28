import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './ErrorMessage'

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }

    componentDidMount(){
        this.updateUsers();
    }

    updateUsers(){
        this.InstaService.getAllUseres()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        })
        console.log(this.state.users);
    }
    
    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo} = item;
            
            return (
                <User 
                    src={photo}
                    alt={altname}
                    name={name}
                    min/>
            )
        })
    }

    render(){
        const {error, users} = this.state;

        if (error){
            return <ErrorMessage />
        }

        const items = this.renderItems(users);

        return(
            <div className="right">
                <User 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
                    alt="user1"
                    name="Pavel"/>
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }

 }