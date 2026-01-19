import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";

import UserContext from "../utils/UserContext";
import LoadingPage from "../utils/LoadingPage";

interface AboutProps {}
class About extends Component<AboutProps> {
  constructor(props: AboutProps) {
    super(props);
    // console.log("parent constructor");
  }

  async componentDidMount() {
    // console.log("parent componentDidMount");
  }
  render() {
    // console.log("parent render");

    return (
      <>
        <LoadingPage></LoadingPage>

        {/* <UserContext.Consumer>
          {(data) => {
            return (
              <h2>
              {data?.loggedInUser}
              </h2>
            );
          }}
        </UserContext.Consumer>
        <UserClass  order ="First" name = "John Doe" age = "21" location = "New York"/>
        <UserClass  order ="Second" name = "Jane Smith" age = "25" location = "Los Angeles"/> */}
    </>
    );
  }
}
export default About;
