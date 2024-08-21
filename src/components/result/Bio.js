function Bio({ bio }) {
  return (
    <h3 className="bio">
      {bio
        ? bio
        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem earum quas nobis atque."}
    </h3>
  );
}

export default Bio;
