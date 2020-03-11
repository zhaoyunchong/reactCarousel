import React,{ Component } from 'react'

class Tab extends Component {
  constructor(){
      super()
      this.state={
          index:0,
          transitions:0,
          w:0,
          myTimer:null,
          setTimer:null
      }
 }
    click(v){
        this.setState({
            index:v
        })
    }
    leftClick(){
        console.log(this.state.index)
        this.setState({
            index:this.state.index-1!==-1?this.state.index-1:this.props.tabJson.picUrl.length-1
        })
    }
    rightClick(){
        this.setState({
            index:this.state.index+1!==this.props.tabJson.picUrl.length?this.state.index+1:0
        })
    }
   componentDidMount(){
       this.autoPlay();
   }
   mouseover(){
       clearInterval(this.state.setTimer)
       clearTimeout(this.state.myTimer);
       this.setState({
            w:0,
        })
   }
   autoPlay(){
    this.setState({
        transitions:this.props.tabJson.timer/1000
    })
     clearTimeout(this.state.myTimer);
     this.state.myTimer=setTimeout(()=>{
             this.setState({
                 w:100
             })
     },0)
     clearInterval(this.state.setTimer);
     this.state.setTimer=setInterval(()=>{
         this.setState({
             index:this.state.index+1!==this.props.tabJson.picUrl.length?this.state.index+1:0,
             transitions:0,
             w:0
         })
         setTimeout(()=>{
             this.setState({
                 w:100,
                 transitions:this.props.tabJson.timer/1000
             })
         },10)
     },this.props.tabJson.timer)
   }
   mouseout(){
       this.autoPlay();
   }
    render(){
        console.log(this.props.tabJson)
        let oLi=[],aLi=[];
        this.props.tabJson.picUrl.forEach((item,index)=>{
            oLi.push(<li key={index}><img alt="轮播图" src={require('./imgs/'+item)} /></li>)
            aLi.push(<li onClick={this.click.bind(this,index)} key={index} className={this.state.index===index?'active':''}></li>)
        })
      return (
      <div className="tab" onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)}>
          <div className="line" style={{transition:'all '+this.state.transitions+'s',width:this.state.w+'%'}}></div>
          <div className="left" onClick={this.leftClick.bind(this)}></div>
          <div className="right" onClick={this.rightClick.bind(this)}></div>
          <ul style={{width:this.props.tabJson.picUrl.length*960+'px',left:-this.state.index*960+'px'}}>
              {oLi}
          </ul>
          <ol>
              {aLi}
          </ol>
      </div>
      )
    }
}
export default Tab