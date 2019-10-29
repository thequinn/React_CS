// // 實驗: Supoose we want to fetch from an API (We use console.log() to replace it for now).  Since we want to do server-side rendering, we want the first fetch to happen on the server side, and then do sth using the data that comes back.  And potentially we want the same code to run on the client side.  

//==========================================================
// VERSION 1:
// This class comp version is modified based on:
// - https://nextjs.org/docs#fetching-data-and-component-lifecycle
//==========================================================

//import React, { Component } from 'react';

// class Index extends Component {

//   // 實驗二:
//   // The console.log() prints in both terminal (server side) and Chrome Dev-Tools (client side). This is problematic b/c we don't want to fetch our data twice causing us to load our data twice.
//   //
//   // After the initial fetch, if you navigating to, ie. Index page by clicking the link on the top. The fetch only happens on the client side.
//   constructor(props) {
//     super(props);
//     //console.log("Fetching Your Data in constructor()");
//   }

//   // 實驗三: 
//   static async getInitialProps() {
//     // Put console.log() in {} b/c func getInitialProps() needs to return obj
//     return { res: console.log("Fetching Your Data in getInitialProps()") };
//   }

//   // 實驗一:
//   // The console.log() only prints in Chrome Dev-Tools (client side).  Also, componentDidMount() only run on the client side.  It's b/c a comp is only mounted when it shows up in the DOM. So 實驗一 won't work.
//   // 
//   //componentDidMount() {
//     //console.log("Fetching Your Data in ComponentDidMount()");
//   //}

//   render() {
//     return (
//       <div>
//         <h1>Index Page</h1>
//         {/* <p>{props.res}</p> */}
//       </div>
//     );
//   }
// }

//==========================================================
// VERSION 2:
// This func comp version is modified based on: 
// - https://nextjs.org/docs#fetching-data-and-component-lifecycle
//==========================================================

import axios from 'axios';

// Index.getInitialProps() passed its returned into "props"
//const Index = (props) => {  
const Index = ({ posts }) => {  // Same as last ln
  return (
    <div>
      <h1>Index Page</h1>

      <ul>
        posts.map( post => {
          <li key={post.id}>{post.title}</li>
        });
      </ul>
    </div>
  );
}

Index.getInitialProps = async() => {
  //console.log("Fetching Your Data in getInitialProps() 2.0");
  
  // Fetch from an API:
  // - JSPNPlaceholder: https://jsonplaceholder.typicode.com/posts
  
  // Performing a GET request
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  
  return { posts: data };
};

export default Index;