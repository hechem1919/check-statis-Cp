import "./App.css";
import React, { Component } from "react";
import img from "./Profile.jpg";
class App extends Component {
  state = {
    Person: {
      fullName: "Hechem Ben Ahmed",
      bio: " Developper works with React",
      ImgSrc: img,
      profession: "Developer",
    },
    show: true,
    count: 0,
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => (
        {
        count: prevState.count +1,
      }
      )
      );
    }, 1000);
  };
 
  render() {
    return (
      <div>
        {this.state.show && (
          <div className="Style">
            <div>
            <h1>{this.state.Person.fullName}</h1>
              <h2>{this.state.Person.profession}</h2>
              <p>{this.state.Person.bio}</p>
            </div>
            <img src={this.state.Person.ImgSrc} alt="Profile"></img>
            <br></br>
          </div>
        )}
        <h1>welcome</h1>
        <button onClick={this.handleShowPerson}>click here</button>
      </div>
    );
  }
}
export default App