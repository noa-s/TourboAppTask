import React, { Component } from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Faker from "faker";
import CoverImage from "./components/CoverImage/CoverImage";
import CityBlock from "./components/CityBlock/CityBlock";
import CityCard from "./components/CityCard/CityCard";
import Header from "./components/Header/Header";


  class App extends Component {
    constructor(props)
    {
      super(props);
      this.state={
          headerImg:"",
          allCities:[],
          citiesToLoad:[],
          currCitiesBatch:[], 
          coverImage:"",
          defaultCity:'paris',
          defaultCityImg:'',
          cityBlockData:{name:"", href:""},
        }
    }
    componentDidMount()
    {
      // let url= Faker.image.city();
      // let url= "https://api.teleport.org/api/urban_areas/";
      let url= "https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images";
      fetch(url).then(response=> response.json())
      .then((data)=>
      {

        console.log(data)
        this.changeStates('allCities' , data._embedded["ua:item"]);
        let defCity= this.state.defaultCity
        let rendom= Math.floor(Math.random() * Math.floor(100));
        this.changeStates('coverImage' , this.state.allCities[rendom]._embedded["ua:images"].photos[0].image.web );
        this.changeStates('citiesToLoad' , this.state.allCities.splice(0,50) );
        
        this.state.allCities.map(c=>{
          if(c.name.toLocaleLowerCase() == defCity ){
            this.changeStates('cityBlockData' , c );
            this.changeStates('defaultCityImg' , c._embedded["ua:images"].photos[0].image.web );
            
          }
        })
      }).catch(errMsg=>{
        console.log(errMsg)
      });


    } 
    changeStates(stateName, value){
        this.setState({
            [stateName]: value
          });
          console.log("this.state.allCities: ",this.state.allCities)
    }

    render() {
      return (
        <Container fluid style={{padding: 0}}>
          {/* Header */}
          <Row>
            <Col>
              <Header></Header>
            </Col>
          </Row>

          <Row style={{marginTop: "80px"}}>
            <Col style={{ height: "400px"}}>
              <CoverImage
                img={this.state.coverImage} 
                mainText="Come Travel With Us!"
                subText="Join now!"
              />
            </Col>
          </Row>
          {/* Body */}

          <Container  style={{padding: 0}}>
              <Row>
                <Col style={{paddingTop:"50px"}}>
                  <CityBlock 
                  city={this.state.cityBlockData}
                  img={this.state.defaultCityImg} 
                  cityName={this.state.cityBlockData.name} 
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{paddingTop:"50px" }}>
                  <CityCard  cities={this.state.citiesToLoad}/> 
                </Col>
              </Row>

          </Container>

          {/* Footer */}

          <Row>
            <Col style={{paddingTop:"50px"}}>

            </Col>
          </Row>
        </Container>
      );
    }
  }
  


export default App;
