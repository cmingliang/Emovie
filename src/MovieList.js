import React,{ Component } from 'react'
import Header from './Header.js'

class MovieList extends Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div>{this.props.children}</div>
            </React.Fragment>
        )
    }
}

export default MovieList;