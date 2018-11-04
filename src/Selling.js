import React,{Component} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.js';
import withfetch from './request.js';
import './Selling.css'

class Container extends Component{
    // constructor(){
    //     super(...arguments);
    //     this.state={
    //         movie:null,
    //         diff:null
    //     };
    // }

    // componentDidMount(){
    //     let api='/PageSubArea/HotPlayMovies.api';
    //     const apiUrl=api+"?locationId=290";
    //     fetch(apiUrl).then(
    //         (response)=>{
    //             if(response.status !==200){
    //                 throw new Error('Fail to get response with status'+response.status);
    //             }
    //             //.json() is what?
    //             response.json().then((responseJson)=>{
    //                 this.setState({movie:responseJson});
    //             }).catch((error)=>{
    //                 this.setState({movie:null});
    //             });
    //         }
    //     )
    // }
    render(){
        if(!this.props.data){
            return <div>暂无数据</div>
        }
        const movieShow=this.props.data.slice(0,12);
        const movieList=movieShow.map((item)=>
            <MovieCard img={item.img||item.image} movieTitle={item.titleCn||item.tCn||item.title} description={item.commonSpecial||item.releaseDate}/>
        );
        return(
           <div className="movieList" >{movieList}</div>
        )      
    }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withfetch(Container);