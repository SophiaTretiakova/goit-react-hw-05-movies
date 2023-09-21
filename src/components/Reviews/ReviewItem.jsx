export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <li>
      <p>
        <b>By {author}:</b>
      </p>
      <p>{content}</p>
    </li>
  );
};
