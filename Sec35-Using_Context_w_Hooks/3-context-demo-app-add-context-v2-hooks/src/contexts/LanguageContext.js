import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

//export class LanguageProvider extends Component {
export function LanguageProvider(props) {
// Con't forget this func accepts "props" so ln-31 can use it

  // Constructor is used in a class comp
  // constructor(props) {
  //   super(props);
  //   this.state = { language: "french" };
  //   this.changeLanguage = this.changeLanguage.bind(this);
  // }
  //
  // To convert the class constructor to what's in a functional comp, we apply useState() using hooks
  const [language, setLanguage] = useState("spanish");

  // In class comp
  // changeLanguage(e) {
  //   this.setState({ language: e.target.value });
  // }
  //
  // In functional comp w/ hooks
  const changeLanguage = e => setLanguage(e.target.value);
   
  //render() {
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {/* {this.props.children}    // this is used in class comp */}
      {props.children}
    </LanguageContext.Provider>
  );
  //}
}
