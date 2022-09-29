import React from "react";
import ReactDOM from "react-dom";

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {number : 0};

//     }
//     handleClick = ()=>{
//         this.setState(state =>({number: state.number + 1}))
//         this.setState(state =>({number: state.number + 2}))
//         this.setState(state =>({number: state.number + 3}))
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.state.number}</p>
//                 <button onClick={this.handleClick}>+</button>
//             </div>
//         )
//     }
// }
const NumberContext = React.createContext();
function App() {
    return (
        <NumberContext.Provider value={"A"}>
            <NumberContext.Consumer>
                {(value1) => (
                    <NumberContext.Provider value={"B"}>
                        <NumberContext.Consumer>
                            {(value2) => (
                                <NumberContext.Provider value={"C"}>
                                    <NumberContext.Consumer>
                                        {(value3) => (
                                            <div>
                                                {value1} {value2} {value3}
                                            </div>
                                        )}
                                    </NumberContext.Consumer>
                                </NumberContext.Provider>
                            )}
                        </NumberContext.Consumer>
                    </NumberContext.Provider>
                )}
            </NumberContext.Consumer>
        </NumberContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
// render 方法渲染有优先级 Default
// 点击中事件触发更新也有优先级

// class Counter{
//    static contextTypes = NumberContext;
// }
// Counter._context = NumberContext;