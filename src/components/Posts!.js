import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component {
    render(){
        return(
            <div className="left">
                <Post src="https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="inst"/>
                <Post src="https://picjumbo.com/wp-content/uploads/free-stock-photos-san-francisco-1080x720.jpg" alt="instt"/>
                
            </div>
        )
    }
}