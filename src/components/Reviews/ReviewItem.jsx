export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <li>
      <p>
        <b>AUTHOR: {author}</b>
      </p>
      <p>{content}</p>
    </li>
  );
};
