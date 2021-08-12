import React, {useState, useEffect} from "react";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      string: `/**
*你好,我叫商伟
*接下来我要演示下怎么绘制一个太极图
*首先我要准备一个div
*/
#div1{  
   border:1px solid  black; 
}
/*
*注意看好了
*首先把div变成一个圆
**/
#div1{
   border-radius:50%;
   box-shadow:0 0 3px rgba(0, 0, 0, 0.5) ;
   border:none;
}
/**八卦是阴阳形成的
 * 一黑一白
 **/
 #div1{
   background: rgb(255,255,255);
   background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
  #div1::after{
   background: rgb(255,255,255);
  }
#div1::before{
   background: rgb(0,0,0);
  }
/**加两个小球
 * 首先加一个黑色的小球
 **/
#div1::after {
   background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);  
  }
/**
 * 然后加一个白色的球
**/
#div1::before {
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  }
`,
      string1: '',
      n: 0,
      string3: ''
    };
  }

  componentDidMount() {
    this.handleClick()
  }

  handleClick = () => {
    let html = document.querySelector("#demo")
    let style = document.querySelector('#style')
    this.state.string3 = style.innerHTML
// this.setState(()=>)
    setTimeout(() => {
      if (this.state.n > this.state.string.length - 1) {
        return console.log(this.state.string.length)
      }
      if (this.state.string[this.state.n] === '\n') {
        this.state.string1 += '<br>'

      } else if (this.state.string[this.state.n] === ' ') {
        this.state.string1 += '&nbsp'
        this.state.string3 += ''
      } else {
        this.state.string1 += this.state.string[this.state.n]
        this.state.string3 += this.state.string[this.state.n]

      }
      html.innerHTML = this.state.string1
      // this.setState(state =>
      //   ({string1: this.state.string1})
      // )
      style.innerHTML = this.state.string3
      window.scrollTo(0, 5000) //设置滚动条滚到底部
      html.scrollTo(0, 5000)
      this.state.n += 1

      this.handleClick()
    }, 0)
  }


  render() {
    return (<>
        <style id='style'>

        </style>
        <div id="demo" className="box">hi
        </div>
        <div className="box1">
          <div id="div1"></div>
        </div>
      </>
    )
  }
}


export default App;

// const App = () => {
//   const [childVisible, setChildVisible] = useState(true)
//   const hide = () => {
//     setChildVisible(false)
//   }
//   const show = () => {
//     setChildVisible(true)
//   }
//   return (
//     <div>
//       {childVisible ? <button onClick={hide}>hide</button> :
//         <button onClick={show}>show</button>}
//       {childVisible ? <Child/> : null}
//     </div>
//   );
// }
// const Child = () => {
//   useEffect(
//     () => {
//       console.log('渲染或者变化了')
//       return () => {
//         console.log('child销毁了')
//       }
//     }
//   )
//   return (
//     <div>child</div>
//   )
// }
// }