import React, { useContext } from "react";
import Board from "../Board/Board";
import ApiContext from "../ApiContext";

const FlexTable = () => {

  const systemInfo = useContext(ApiContext);

  return (
    <div>
      <Board boardInfo={systemInfo} />
    </div>
  );
};

export default FlexTable;
