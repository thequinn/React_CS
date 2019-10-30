import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps() {
    //.......?????....?????.....?????.....?????.....?????.....?????...
    return { res: console.log("Fetching Your Data in getInitialProps()") };
  }
  render() {
    return (
      <div>
        <h1>Index Page</h1>
        {/* <p>{props.res}</p> */}
      </div>
    );
  }
}

const Index = () => {
  return (
    <div><h1>Index Page</h1></div>
  );
}
Index.getInitialProps = async() => {
  //.......?????....?????.....?????.....?????.....?????.....?????...
  console.log("Fetching Your Data in getInitialProps() 2.0");
};

export default Index;
