import React from 'react'
import Main from '../components/Main'

 export default class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Main message="Hello React"/>
        {this.props.children}
      </div>
    )
  }
}
