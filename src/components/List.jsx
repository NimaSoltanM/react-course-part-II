import Post from './Post';
import PropTypes from 'prop-types';
import Button from './Button';

export default function List({
  posts,
  onRemove,
  onEdit,
  onLike,
  onDislike,
  onShowPost,
}) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className='posts-wrapper'>
          <div
            className={`post-content neutral-post-bg ${
              post.dislikes >= 20 && 'hated-post-bg'
            }`}
          >
            {post.spoiler ? (
              <div className='spoiler-content'>
                <small>این پست دارای اسپویلر است 🚫</small>
                <Button onClick={() => onShowPost(post.id)}>مشاهده</Button>
              </div>
            ) : (
              <Post
                {...post}
                onRemove={onRemove}
                onEdit={onEdit}
                onLike={onLike}
                onDislike={onDislike}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onShowPost: PropTypes.func.isRequired,
};
