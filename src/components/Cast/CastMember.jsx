export const CastMember = ({ castItem: { profile_path, name, character } }) => {
  return (
    <li>
      <img
        style={{ width: '100px' }}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w300/${profile_path}`
            : 'https://moniheal.com/build/images/no_avatar.svg'
        }
        alt={name}
      />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
