import React from "react";
import { Loader } from "react-feather";

const Bio = () => {
  return (
    <div>
      <h6 style={{marginRight:'10px'}}>
        {" "}
        <Loader size="18px" /> Passionnée par l'univers du web
        <Loader size="18px" />
      </h6>
      <h6 style={{marginLeft:'315px'}}>
        <Loader size="18px" /> Diplômée de l'Ecole Nationale d'Electronique et
        Telecommunications de Sfax
        <Loader size="18px" />{" "}
      </h6>
      <h6 style={{marginLeft:'225px'}}>
        {" "}
        <Loader size="18px" /> Actuellement en formation developpeur web full
        stack javascript
        <Loader size="18px" />
      </h6>
    </div>
  );
};

export default Bio;