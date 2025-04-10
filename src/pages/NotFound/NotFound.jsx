import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Not Found Page</h1>
      <p>Oops!</p>
      <p>
        Please, visit <Link to="/">home page</Link>
      </p>
    </>
  );
}

export default NotFound;
