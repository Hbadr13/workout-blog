import Link from 'next/link';

const PostCard = ({ title, slug, excerpt }) => (
  <article>
    <h2>{title}</h2>
    <p>{excerpt}</p>
    <Link href={`/${slug}`}>Read more</Link>
  </article>
);

export default PostCard;
