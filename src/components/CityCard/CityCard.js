// import React from "react";
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Image} from "react-bootstrap/Image";
import "./CityCard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class CityCard extends Component {
  constructor(props)
  {
    super(props);
    this.state={
        citiesCards:[],
    }
  }

  componentDidMount() {
    console.log("this.state.citiesCards: "+this.state.citiesCards);
    console.log("this.props.cities: "+this.props.cities);
    debugger
    }
  render() {
    return (
          <Row>

            {
                this.props.cities.map((city) => {
                return  <Col sm="3">
                <Card >
                    <CardImg variant="top" src={city._embedded["ua:images"].photos[0].image.web} />
                    <CardBody>
                        <CardTitle>{city.full_name}</CardTitle>
                        <CardText style={{ float: "right"}}>
                            <span class="perP"> Per person</span>
                            <span class="price"> 100$</span>
                            
                        </CardText>
                    </CardBody>
                </Card>
                </Col>

                }  )
            }

            </Row>



    );
  }
}

export default CityCard;
