import { AiFillGithub, AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function Links({ location, gitUrl, twitter, blog }) {
  return (
    <div className="links">
      <a href="#address" className={`address ${!location && "not-available"}`}>
        <span>
          <FaMapMarkerAlt />
        </span>
        {location ? location : "Not Available"}
      </a>
      <a href="#twitter" className={!twitter && "not-available"}>
        <span>
          <AiOutlineTwitter />
        </span>
        {twitter ? twitter : "Not Available"}
      </a>
      <a href={blog} target="_blank" rel="noreferrer">
        <span>
          <AiOutlineLink />
        </span>
        {blog ? `${blog.substr(0, 24)}...` : "Not Available"}
      </a>
      <a href={gitUrl} target="_blank" rel="noreferrer">
        <span>
          <AiFillGithub />
        </span>
        @github
      </a>
    </div>
  );
}

export default Links;
