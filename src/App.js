import React from "react";

const App = () => {
  return <Counter />;
};

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleMinus() {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return(
      <>
        <div>count{this.state.count}</div>
        <button onClick={() => { this.handleClick() }}>+1</button>
        <button onClick={() => { this.handleMinus() }}>-1</button>
      </>
    ) 
  }
}

export default App;
