function Repo({ followers, following, repoCount }) {
  return (
    <div className="repo-detail">
      <div>
        <h3>Repos</h3>
        <p className="count">{repoCount ? repoCount : 8}</p>
      </div>
      <div>
        <h3>Followers</h3>
        <p className="count">{followers ? followers : 3938}</p>
      </div>
      <div>
        <h3>Following</h3>
        <p className="count">{following ? following : 9}</p>
      </div>
    </div>
  );
}

export default Repo;
