import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from './Scroll';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import VenueLocationIcon from './VenueLocationIcon';
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Robot from "./Robot"


const deepClone = obj => JSON.parse(JSON.stringify(obj));

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: "",
      isModalDisplayed: false,
      Locations: [],
      currentLocation: []
      //  {
      //   // lat: 35.7,
      //   // lng: 51.3
      // }
      ,
      zoom: 3,
      id: null
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() })
      .then(users => this.setState({ robots: users }))
    // const obj = deepClone(this.state.robots)
    // obj.map((robo, i) => {
    //       const data = deepClone(obj[i]);
    //       console.log(data.address.geo);
    //       this.state.Locations.push(data.address.geo)
    //       console.log("current ::::::: ", this.state.Locations);})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  // setLocations = () => {
  //   const obj = deepClone(this.state.robots)
  //   console.log("object:;;", obj);
  //   obj.map((robo, i) => {
  //     const data = deepClone(obj[i])
  //     console.log("=========");
  //     console.log("ROBO : ", robo.address);
  //     console.log("=========");
  //     console.log(data);
  //     console.log(data.name);
  //     console.log(data.address);
  //     console.log(data.address.geo);
  //     this.state.Locations.push(data.address.geo)
  //     console.log("**********************************************");
  //     console.log("current ::::::: ", this.state.Locations);
  //     console.log("**********************************************");
  //   })
  // }
  // setLocations();



  // setLocations();

  // }

  // moveUp = () => {
  //   const obj = deepClone(this.state.currentLocation)
  //   obj.lat += .005
  //   this.setState({currentLocation: obj})
  // }

  // moveDown = () => {
  //   const obj = deepClone(this.state.currentLocation)
  //   obj.lat -= .005
  //   this.setState({currentLocation: obj})
  // }

  // moveRight = () => {
  //   const obj = deepClone(this.state.currentLocation)
  //   obj.lng += .005
  //   this.setState({currentLocation: obj})
  // }

  // moveLeft = () => {
  //   const obj = deepClone(this.state.currentLocation)
  //   obj.lng -= .005
  //   this.setState({currentLocation: obj})
  // }

  render() {
    const { robots, searchfield, id } = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    const setLocations = () => {
      const obj = deepClone(this.state.robots)
      console.log("object:;;", obj);
      obj.map((robo, i) => {
        const data = deepClone(obj[i])
        console.log("=========");
        console.log("ROBO : ", robo.address);
        console.log("=========");
        console.log(data);
        console.log(data.name);
        console.log(data.address);
        console.log(data.address.geo);
        this.state.Locations.push(data.address.geo)
        console.log("**********************************************");
        console.log("current ::::::: ", this.state.Locations);
        console.log("id is now :", this.state.id);
        console.log("**********************************************");
      })
    }
    setLocations();

    const showModal = ({ geo, id }) => {
      console.log(geo);
      // let i = Locations.findIndex(geo)
      // this.setState({ isModalDisplayed: true, currentLocation: this.state.Locations[i]})
      this.setState({ isModalDisplayed: true, currentLocation: geo, id: id })
    }

    const hideModal = () => {
      this.setState({ isModalDisplayed: false });
    }

    return (
      <>
        <BrowserRouter>
          {
            !this.state.robots.length
              ?
              <FontAwesomeIcon icon={faCircleNotch} />
              :
              <div className="big">
                {
                  this.state.isModalDisplayed
                    ?
                    <>
                      <div className="overlay" onClick={() => { hideModal() }}></div>
                      <div className="modal">
                        <div onClick={() => hideModal()} className="hide"><FontAwesomeIcon icon={faTimesCircle} /></div>
                        {/* <button onClick={() => {<BrowserRouter><Routes><Route path="/robot/:id" element={newApp}></Route></Routes></BrowserRouter>}}>read more...</button> */}
                        <>
                          <Link to={`/Robot/${id}`} key={id}>Read more</Link>
                          <Routes>
                            <Route path="/Robot/:id" element={<Robot />}>
                            </Route>
                          </Routes>
                        </>
                        <div style={{ position: 'relatives' }} >
                          <h1>Location</h1>
                          <br />
                          <div className="mapContainer">
                            <MapContainer center={this.state.currentLocation} zoom={this.state.zoom}>
                              <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                              <Marker position={this.state.currentLocation} icon={VenueLocationIcon}>
                                <Popup> im here... </Popup>
                              </Marker>
                            </MapContainer>
                          </div>
                        </div>
                      </div>
                    </>
                    :
                    null
                }

                <div className="group"><br />
                  <h1 className="rtitle">ROBOFRIENDS</h1>
                  <SearchBox searchChange={this.onSearchChange} />
                </div>
                <Scroll>
                  <CardList robots={filteredRobots} showModal={showModal} />
                </Scroll>
              </div>
          }
        </BrowserRouter>
      </>
    );
  }
}

export default App;

