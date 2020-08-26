import React from "react";
import "./FlexTable.css";

const FlexTable = (props) => {
  return (
    <div className="main">
      {props.tableInfo.pcParts.length > 0 &&
        props.tableInfo.pcParts.map((data, i) => (
          <div className="rawr" key={`rig${i+1}`}>
            <div className="column">
              <div className="part1">
                <i className="fas fa-share-square"> </i>
              </div>
              <div className="part4">
                  <p>My current setup has:</p>
                </div>
              <div className="part2">
                <p>{data.cpumanufacturer} {data.cpumodel} {data.cpucores} core processor</p>
              </div>
              <div className="part3">
                {data.gpumanufacturer} {data.gpumodel} and {data.ram} GBs of RAM
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FlexTable;
