import "./App.css";

import React, { Component } from "react";
import IterationSample from "./06/IterationSample";

// const App = () => {
//   return (
//     <div>
//       <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//       <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
//     </div>
//   );
// };

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
      </div>
    );
  }
}
export default App;
