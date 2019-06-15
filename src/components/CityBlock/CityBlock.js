import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import "./CityBlock.css";


class CityBlock extends Component {
  constructor(props)
  {
    super(props);
    this.state={ city:{} };
  }

  changeStates(stateName, value){
    debugger
      this.setState({
          [stateName]: value
        });
        console.log("this.state."+stateName+": ",value)
  }
  render() {
    return (
      <div className="city-block-container">
        {/* <div className="city-block-spacer"></div> */}
        <div className="city-block-text"
          style={{
            backgroundColor: "#33CC99"
          }}
        >
          <span className="cityblock-text-span">{this.props.city.name}</span>
          <div className="cityblock-content-div">   {this.props.city.full_name}, {this.props.city.continent}
          </div>
        </div>
        <div className="city-block-image">
          <Image
            src={this.props.img  }
            style={{
              objectFit: "cover",
              border: 'none',
              padding: 0,
              borderRadius: 0,
              height: '300px'
            }}
            thumbnail
          />
        </div>
  
      </div>
    );
  }
}

// const CityBlock = props => {
//   return (
//     <div className="city-block-container">
//       <div className="city-block-spacer"></div>
//       <div className="city-block-text"
//         style={{
//           backgroundColor: "#33CC99"
//         }}
//       >
//         <span className="cityblock-text-span">Paris</span>
//       </div>
//       <div className="city-block-image">
//         <Image
//           src={props.img}
//           style={{
//             objectFit: "cover"
//           }}
//         />
//       </div>

//     </div>
//   );
// };

export default CityBlock;
