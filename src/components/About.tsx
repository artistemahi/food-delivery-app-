import UserClass from "./UserClass";
import User from "./User";
import {Component} from "react";
interface AboutProps{}
class About extends Component<AboutProps>{
  constructor(props: AboutProps){
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent componentDidMount");
  }
  render(){
    console.log("parent render");
    return (
      <>
        <h1>About Us Page</h1>
        <UserClass name = "John Doe" age = "30" location = "New York"/>
      </>
    );
  }
}
export default About;