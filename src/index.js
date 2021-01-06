import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"
import Tab from "./tab"
console.log('hello world');
class App extends Component {
  render(){
    console.log('你好吗');
    console.log('this is a react app!');
    return (
      <div className="app">
        <Tab tabJson={{picUrl:['1.jpg','2.jpg','3.jpg','4.jpg'],timer:2000}} />
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'));

