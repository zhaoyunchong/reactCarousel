import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"
import Tab from "./tab"
class App extends Component {
  render(){
    return (
      <div className="app">
        <Tab tabJson={{picUrl:['1.jpg','2.jpg','3.jpg','4.jpg'],timer:2000}} />
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'));

