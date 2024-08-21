function Bio({ bio }) {
  return (
    <h3 className={bio ? "bio" : "bio not-available"}>
      {bio ? bio : "Not Available"}
    </h3>
  );
}

export default Bio;
