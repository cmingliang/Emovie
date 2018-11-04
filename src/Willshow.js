import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Willshow extends Component{
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
        
        return(
           <div>111</div>
        )      
    }
}

Willshow.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Willshow;