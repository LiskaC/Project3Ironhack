import React, { Component } from "react";
// import { MDBCol, MDBIcon } from "mdbreact";
import Search from "./Search";
import Card from "./Card";
import Footer from "./Footer";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { Redirect } from "react-router-dom";
// import {
//   CardGroup,
//   Card,
//   Row,
//   CardColumns,
//   ButtonGroup,
//   ButtonToolbar,
//   Button
// } from "react-bootstrap";
// // import onSubmit from "../components/Search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

      results: [],


      // redirect: false
    };
  }

  getInfo = (searchTerm) => {

    let url = (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/api/stories";
    if (searchTerm) url = ((process.env.REACT_APP_API_URL || "http://localhost:5000") + `/api/stories/${searchTerm}`);
    axios.get(url).then(res => {
      this.setState({
        results: res.data

      });
    });
  };

  componentDidMount() {
    this.getInfo();
  }

  render() {

    return (
      <div className="home">

        <header>
          <div className="NavBar">
            <ul>
              <a href="/Collections">Collections</a>
              <br />
              <a href="/">Logout</a>
            </ul>
          </div>
        </header>

        <div>
          <Search onSearch={this.getInfo} />
        </div>

        <Card mirResult={this.state.results} />
        <Footer />

      </div>
    );
  }
}
export default Home;
