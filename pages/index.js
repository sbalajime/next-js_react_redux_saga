import React, {Component} from 'react';
import { connect} from 'react-redux';
import {wrapper} from '../redux/store';
import { getjoke } from "../redux/joke/actions";

class  ApiData extends Component {
    componentDidMount(){
        // this.props.getjoke()
    }
    render(){
        console.log('this.props', this.props)
        return(<div>
            <h1>Data from redux:</h1>
        <h1>{this.props.joke.joke}</h1>
            </div>)
    }
       
    
}


const mapStateToProps = ({ jokeReducer }) => {
    const { joke } = jokeReducer;
    return { joke };
  };
  
  export default wrapper.withRedux(connect(mapStateToProps, null)(ApiData));
  




export const getServerSideProps = wrapper.getServerSideProps(
  ({store, req, res, ...etc}) => {
    store.dispatch(getjoke());
    console.log('store', store.getState());
  }
);