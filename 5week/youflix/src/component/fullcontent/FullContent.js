import React, { Component } from 'react';
import "./FullContent.css";

class FullContent extends Component {
  render() {
    return (
      <div className="FullContent">
      	<iframe
      		className="my-iframe"
      		frameBorder="0"
      		src={this.props.content.src+"?autoplay=1&rel=0"}
      		allowFullScreen={true}
      		allow="autoplay"
      		>
      		</iframe>
      </div>
    );
  }
}

export default FullContent;