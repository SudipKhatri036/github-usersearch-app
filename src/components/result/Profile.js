function Profile({ name, avatarUrl, createdAt, userName }) {
  return (
    <div className="profile">
      <img
        src={avatarUrl ? avatarUrl : "./avatar.png"}
        alt={`${name} avatar`}
      />
      <div className="intro">
        <div>
          <h2>{name ? name : "The Octocat"}</h2>
          <a href="#" target="_blank">
            @{userName ? userName : "Octocat"}
          </a>
        </div>
        <p className="join-date">
          Joined{" "}
          {createdAt
            ? createdAt
                ?.split("T")
                .slice(0, 1)
                .join(" ")
                .split("-")
                .reverse()
                .join(" ")
            : "25 Jan 2011"}
        </p>
      </div>
    </div>
  );
}

export default Profile;
