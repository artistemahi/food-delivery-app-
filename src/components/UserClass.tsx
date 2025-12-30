import React from "react";

interface UserProps {
  name: string;
  age: string;
  location: string;
}

interface StateType {
  count1: number;
}

class UserClass extends React.Component<UserProps, StateType> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      count1: 0,
    };
    console.log("child constructor");
  }
  componentDidMount(){
    console.log("child componentDidMount");
  }
  render() {
    console.log("child render");
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
        <h2>Name: {this.props.name}</h2>
        <h3>Age: {this.props.age}</h3>
        <h3>Location: India </h3>
      </div>
    );
  }
}
export default UserClass;
