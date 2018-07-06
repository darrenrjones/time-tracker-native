'use strict';

import { connect} from 'react-redux';

export function getSeconds(){
  return ('0' + this.props.currentClock.time % 60).slice(-2);
}

export function getMinutes(){
  let min = Math.floor(this.props.currentClock.time / 60) % 60
  if(min.toString().length < 2){
    return '0' + min;
  } else {
    return min;
  }    
}

export function getHours(){
  // return Math.floor(this.props.currentClock.time /60 /60).toLocaleString('en')  
  let hour = Math.floor(this.props.currentClock.time /60 /60).toLocaleString('en');
  if ( hour.toString().length < 2){
    return '0' + hour;
  } else {
    return hour;
  }
}  

const mapStateToProps = state => ({
  currentClock: state.mainReducer.currentClock
});
export default connect(mapStateToProps)(timeConvertor);
