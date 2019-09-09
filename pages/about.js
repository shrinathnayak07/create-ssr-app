import React, { Component } from "react";
import Link from "next/link";

class About extends Component {
  render() {
    return (
      <div>
        Welcome to About!{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    );
  }
}

export default About;
