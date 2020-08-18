import React from "react";
import "./Board.css";

const Board = (props) => {
  return (
    <div className="main">
      {props.boardInfo.staticTest.length > 0 &&
        props.boardInfo.staticTest.map((data) => (
          <div className="rawr">
            <div className="column">
              <div className="part1">
                <i className="fas fa-share-square"> </i>
              </div>
              <div className="part2">
                {data.cpumanufacturer} {data.cpumodel} {data.cpucores}
                core processor
              </div>
              <div className="part3">
                {data.gpumanufacturer} {data.gpumodel} {data.ram}
                GBs of RAM
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Board;
