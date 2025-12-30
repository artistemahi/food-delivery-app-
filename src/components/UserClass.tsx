import React from "react";

interface UserProps {
  name: string;
  age: string;
  location: string;
  order: string;
}

interface StateType {
  count1: number;
  userInfo:any
}

class UserClass extends React.Component<UserProps, StateType> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      count1: 0,
      userInfo:{
        name:"default",
        location:"default"
      }
    };
    console.log(this.props.order + " child constructor");
  }
  async componentDidMount(){
    console.log(this.props.order +"child componentDidMount");
    const data = await fetch ("https://api.github.com/users/artistemahi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    })
  }
  componentWillUnmount(){
    console.log("this is  componentWillUnmount method");
  }
  render() {
    const {name,public_repos,avatar_url} = this.state.userInfo;
    console.log(this.props.order +"child render");

    const { count1 } = this.state;
    return (
      <div className="user-card">
        <h1>count : {count1}</h1>
        <button
          onClick={() => {
            this.setState({ count1: count1 + 1 });
          }}
        >
          {" "}
          count increase{" "}
        </button>
        <h1>Classed based Component</h1>
        <img src={avatar_url} alt="user avatar" width="100"/>
        <h2>Name: {name}</h2>
        <h3>Age: {this.props.age}</h3>
        <h3>repo: {public_repos}</h3>
      </div>
    );
  }
}
export default UserClass;
