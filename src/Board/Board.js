import React, { useContext } from "react";
import FlexTable from "../FlexTable/FlexTable";
import apiContext from "../apiContext";

const Board = () => {

  const systemInfo = useContext(apiContext);

  return (
    <div>
      <FlexTable boardInfo={systemInfo} />
    </div>
  );
};

export default Board;
