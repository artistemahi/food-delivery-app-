import UserClass from "./UserClass";
import User from "./User";
const about :React.FC = () => {
  return (<>
    <h1>About Us Page</h1>
    <UserClass name = "John Doe" age = "30" location = "New York"/>
    <User name="deva" age="32" location = "delhi"/>
  </>);
};
export default about;