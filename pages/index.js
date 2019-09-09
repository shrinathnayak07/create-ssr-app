import React, { Component } from "react";
import Link from "next/link";

class Index extends Component {
  render() {
    return (
      <div>
        Welcome to Home!{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    );
  }
}

export default Index;
