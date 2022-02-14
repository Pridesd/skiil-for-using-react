import "./App.css";

import React, { Component } from "react";
import LifeCycleSample from "./07/LifeCycleSample";
import ErrorBoundary from "./07/ErrorBoundary";

// const App = () => {
//   return (
//     <div>
//       <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//       <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
//     </div>
//   );
// };

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
