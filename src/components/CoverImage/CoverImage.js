import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import "./CoverImage.css";



class CoverImage extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {

    return (
      <div className={`cover-image-container`}>
        <Image
          src={this.props.img}
          style={{ width: "100%", height: "100%" ,object_fit: "none"}}
        />
        <div className={`over-image-centered-text`}
              style={{    
                padding: '20px',
                backgroundColor: 'rgb(0,0,0,0.5)',
                borderRadius: '20px',
                cursor: 'pointer',
              }}
           >
          <h1>{this.props.mainText}</h1>
          <p>{this.props.subText}</p>
        </div>
      </div>
    );
  }
}


export default CoverImage;
