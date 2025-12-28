import React from 'react';

interface UserProps {
    name: string;
    age: string;
    location: string;
}

class UserClass extends React.Component<UserProps> {
    constructor(props: UserProps) {
        super(props);
    }
    render() {
        return (  
            <div className="user-card" >
                <h1>Classed based Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Age: {this.props.age}</h3>
                <h3>Location: India </h3>
            </div>
        );
    }
};
export default UserClass;