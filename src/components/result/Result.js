import Profile from "./Profile";
import Bio from "./Bio";
import Repo from "./Repo";
import Links from "./Links";

function Result({ userDetails }) {
  const {
    avatar_url: avatarUrl,
    bio,
    blog,
    created_at: createdAt,
    followers,
    following,
    location,
    name,
    html_url: url,
    twitter_username: twitter,
    login: userName,
    public_repos: repoCount,
  } = userDetails;
  return (
    <>
      <Profile
        name={name}
        avatarUrl={avatarUrl}
        createdAt={createdAt}
        userName={userName}
        gitUrl={url}
      />

      <Bio bio={bio} />
      <Repo followers={followers} following={following} repoCount={repoCount} />
      <Links location={location} gitUrl={url} twitter={twitter} blog={blog} />
    </>
  );
}

export default Result;
