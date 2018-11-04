import React,{ Component } from 'react';

function withfetch(WrappingComponent){
    return class WrappedComponent extends Component {
        constructor(){
            super(...arguments);
            this.state={
                data:null
            };
        }

        // myfetch(){
        //     const {page}=this.props;
        //     let diff,api;
        //     switch(page){
        //         case 'selling':
        //             api='/PageSubArea/HotPlayMovies.api';
        //             diff='movies';
        //             break;
        //         case 'showing':
        //             api='/Showtime/LocationMovies.api';
        //             diff='ms';
        //             break;
        //         case 'willshow':
        //             api='/Movie/MovieComingNew.api';
        //             diff='moviecomings';
        //             break;
        //     }
        //     const apiUrl=api+"?locationId=290";
        //     fetch(apiUrl).then(
        //         (response)=>{
        //             if(response.status !==200){
        //                 throw new Error('Fail to get response with status'+response.status);
        //             }
        //             //.json() is what?
        //             response.json().then((responseJson)=>{
        //                 this.setState({data:responseJson});
        //             }).catch((error)=>{
        //                 this.setState({data:null});
        //             });
        //         }
        //     )
        // }

        static getDerivedStateFromProps(props){
            const {page}=props;
            let diff,api;
            switch(page){
                case 'selling':
                    api='/PageSubArea/HotPlayMovies.api';
                    diff='movies';
                    break;
                case 'showing':
                    api='/Showtime/LocationMovies.api';
                    diff='ms';
                    break;
                case 'willshow':
                    api='/Movie/MovieComingNew.api';
                    diff='moviecomings';
                    break;
            }
            const apiUrl=api+"?locationId=290";
            fetch(apiUrl).then(
                (response)=>{
                    if(response.status !==200){
                        throw new Error('Fail to get response with status'+response.status);
                    }
                    response.json().then((responseJson)=>{
                        return {
                            data:responseJson[diff],
                        };                  
                    }).catch((error)=>{
                        return null;
                    });
                }
            )
        }
        render(){         
            if(!this.state.data) return <div>暂无数据</div>;
            console.log(this.state.data);
            return <WrappingComponent data={this.state.data}/>;
        }
    }
}

export default withfetch;