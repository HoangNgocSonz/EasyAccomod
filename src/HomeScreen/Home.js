import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://travel-share-backend.herokuapp.com/api/post")
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data.data,
        });
      })
      .catch((err) => console("err: " + err));
  }
  render() {
    return <div>jhtuytu</div>;
  }
}
