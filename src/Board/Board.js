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
              <div className="part4">
                  <p>My current setup has:</p>
                </div>
              <div className="part2">
                <p>{data.cpuManufacturer} {data.cpuModel} {data.cpuCores} core processor</p>
              </div>
              <div className="part3">
                {data.gpuManufacturer} {data.gpuModel} and {data.ram} GBs of RAM
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Board;
