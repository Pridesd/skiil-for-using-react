import { Component } from "react";
import ColorContext, { ColorConsumer } from "../context/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// const SelectColor = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: "flex" }}>
//             {colors.map((color) => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: "24px",
//                   height: "24px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={(e) => {
//                   //마우스 오른쪽 클릭 이벤트
//                   //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 걸 무시
//                   e.preventDefault();
//                   actions.setSubcolor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   );
// };

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.action.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.action.setSubolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
