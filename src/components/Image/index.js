import React from "react";

export default function Image(props) {
  return (
    <div>
      <img src={props.image.default} alt="Biscoito" className="img" />
    </div>
  );
}
