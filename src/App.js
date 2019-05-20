import React, {Component} from 'react';
import './App.css';

const MyContext = React.createContext();
class MyProvider extends Component{
  state={
    x:0
  }
  render(){
    return(
      <MyContext.Provider value={{
        state:this.state,
        handleXClick:()=> this.setState({
          x: this.state.x + 1
        })
      }}>
      {this.props.children}
      </MyContext.Provider>
    )
  }
}
class A extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     x: 0
  //   };
  // }

  // handleXClick = () => {
  //   this.setState({
  //     x: this.state.x + 1
  //   });
  // }
  render() {
    return (
      <div className="component-A">
      <MyContext.Consumer>
        <h1>Component A</h1>
        {(context)=>(
          The state in the component A is {context.state.x} <br />
          context.handleXClick will set the state to a new value => {"context.setState({x: context.state.x + 1})"} 
          <B x={context.state.x} onXClick={context.handleXClick} />
          <D x={context.state.x} onXClick={context.handleXClick} />
       
        )}
      </MyContext.Consumer>
      </div>
    );
  }
}
class B extends React.Component {
  render() {
    return (
      <div className="component-B">
        <h1>Component B</h1>
        this.props.x = {context.state.x} <br />
        this.props.onXClick => (method from component A) <br />
        <C x={context.state.x} onXClick={context.onXClick} />
      </div>
    );
  }
}
class C extends React.Component {
  render() {
    return (
      <div className="component-C">
        <h1>Component C</h1>
        this.props.x = {context.state.x} <br />
        this.props.onXClick => (method passed from component B) <br />
        <button onClick={context.onXClick}>{context.state.x}</button> onClick =>
        this.props.onXClick
      </div>
    );
  }
}
class D extends React.Component {
  render() {
    return (
      <div className="component-D">
        <h1>Component D</h1>
        this.props.x = {context.state.x} <br />
        this.props.onXClick => (method from component A) <br />
        <button onClick={context.onXClick}>{context.state.x}</button> onClick =>
        this.props.onXClick
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <MyProvider/>
      <A />
    </div>
  );
}

export default App;






