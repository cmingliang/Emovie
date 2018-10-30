import React,{Component} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.js'

class Container extends Component{
    constructor(){
        super(...arguments);
        this.state={
            movie:null
        };
    }

    componentDidMount(){
        const apiUrl="/PageSubArea/HotPlayMovies.api"+"?locationId=290";
        fetch(apiUrl).then(
            (response)=>{
                if(response.status !==200){
                    throw new Error('Fail to get response with status'+response.status);
                }
                //.json() is what?
                response.json().then((responseJson)=>{
                    this.setState({movie:responseJson});
                }).catch((error)=>{
                    this.setState({movie:null});
                });
            }
        )
    }
    render(){
        if(!this.state.movie){
            return <div>暂无数据</div>
        }
        const movieList=this.state.movie.movies.map((item)=>
            <MovieCard img={item.img} title={item.titleCn} description={item.commonSpecial}/>
        );
        return(
           <div className="movieList">{movieList}</div>
        )      
    }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Container;