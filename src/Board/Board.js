import React, { useContext } from "react";
import FlexTable from "../FlexTable/FlexTable";
import ApiContext from "../ApiContext";

const Board = () => {

  const systemInfo = useContext(ApiContext);

  return (
    <div>
      <FlexTable tableInfo={systemInfo} />
    </div>
  );
};

export default Board;
