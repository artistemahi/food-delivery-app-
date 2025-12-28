interface propsType {
    name:string;
    age: string;
    location:string;
};
const User :React.FC<propsType>= (props:propsType) =>{
 return( <>
 <div className="user-card">
    <h1>Function based component</h1>
    <h2>Name: {props.name}</h2>
    <h2>Age: {props.age}</h2>
    <h2>Location: {props.location}</h2>
 </div>
 </>);
};
export default User;