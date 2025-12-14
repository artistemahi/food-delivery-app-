import { useRouteError } from "react-router";
const Error: React.FC = () => {
  const err: any = useRouteError();
  return (
    <div>
      <h1>OOPS! </h1>
        <h2>We encountered an error :</h2>
        <h3>{err.status + " : " + err.statusText}</h3>
    </div>
  );
};
export default Error;