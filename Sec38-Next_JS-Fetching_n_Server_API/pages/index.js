// 實驗: Supoose we want to fetch from an API (We use console.log() to replace it for now).  Since we want to do server-side rendering, we want the first fetch to happen on the server side, and then do sth using the data that comes back.  And potentially we want the same code to run on the client side.  

import React, { Component } from 'react';

class Index extends Component {

  // 實驗二:
  // The log is printed in both terminal (server side) and Chrome Dev-Tools (client side). This is problematic b/c we don't want to fetch our data twice causing us to load our data twice.
  //
  // After the initial fetch, if you navigating to, ie. Index page by clicking the link on the top. The fetch only happens on the client side.
  constructor(props) {
    super(props);
    console.log("Fetching Your Data in constructor()");
  }

  // 實驗一:
  // The log is only printed in Chrome Dev-Tools (client side).  Also, componentDidMount() only run on the client side.  It's b/c a comp is only mounted when it shows up in the DOM. So 實驗一 won't work.
  // 
  // componentDidMount() {
  //   console.log("Fetching Your Data in ComponentDidMount()");
  // }

  render() {
    return (
      <div>
        <h1>Index Page</h1>
      </div>
    );
  }
}


export default Index;