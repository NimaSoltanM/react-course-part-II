import PropTypes from 'prop-types';
import Expand from './Expand';
import Modal from './Modal';
import { useState } from 'react';

function Post({
  id,
  text,
  categories,
  dislikes,
  likes,
  onRemove,
  onLike,
  onDislike,
  onEdit,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='post-text'>
        <Expand>{text}</Expand>
      </div>
      <div className='post-categories'>
        {categories.map((category) => (
          <div key={category} className='badge'>
            {category}
          </div>
        ))}
      </div>
      {dislikes >= 20 && (
        <p className='post-status'>کاربران این پست را نپسندیده اند 😡</p>
      )}

      <div className='post-buttons-wrapper'>
        <button
          className='post-button'
          onClick={() => onRemove(id, { type: 'REMOVE', payload: '' })}
        >
          🗑️
        </button>
        <button className='post-button' onClick={() => setOpen(true)}>
          ✍️
        </button>
        <div>
          <button
            className='post-button'
            onClick={() => onLike(id, { type: 'LIKE', payload: '' })}
          >
            👍
          </button>
          <span>{likes}</span>
        </div>
        <div>
          <button
            className='post-button'
            onClick={() => onDislike(id, { type: 'DISLIKE', payload: '' })}
          >
            👎
          </button>
          <span>{dislikes}</span>
        </div>
      </div>

      <Modal
        id={id}
        open={open}
        onClose={() => setOpen(false)}
        oldText={text}
        onEdit={onEdit}
      />
    </>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Post;
