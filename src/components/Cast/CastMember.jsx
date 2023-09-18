export const CastMember = ({ castItem: { img, name, character } }) => {
  return (
    <li>
      <img src={img} alt={name} />
      {/* <p>{name}</p>
      <p>{character}</p> */}
    </li>
  );
};
