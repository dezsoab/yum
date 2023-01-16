import { Link } from "react-router-dom";
import Navigation from "../navigation";

const Feed = () => {
  return (
    <>
      <Navigation />
      <Link to="/admin">to admin page</Link>
    </>
  );
};

export default Feed;
