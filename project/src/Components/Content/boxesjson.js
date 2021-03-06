import React from "react";
class EachBox extends React.Component {
  render() {
    return (
      <div>
        <div className="makethefle" >
        <h1 className="h1style">{this.props.title}</h1>

        <svg height="35px"
          viewBox="0 0 16 16"
          className="bi bi-layout-text-window-reverse box_head"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
          />
          <path
            fillRule="evenodd"
            d="M5 15V4H4v11h1zM.5 4h15V3H.5v1zM13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
          />
        </svg>
          </div>
        <div className="BoxContentstl">{this.props.content}</div>
      </div>
    )
  }
}

export default EachBox;
