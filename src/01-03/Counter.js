import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; //state 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호춯할 함수를 지정
          onClick={() => {
            //this.setState를 통해 state에 새로운 값을 넣을 수 있음
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log("방금 setState가 호출되었습니다. ");
              }
            );
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
