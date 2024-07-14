import React from 'react'
import PropTypes from 'prop-types'

import css from './PostItem.module.css'

const PostItem = ({post}) => {
 
  return (
    <div className={css.post}>
      <div className={css.post__content}>
        <strong>{post.id}. { post.title }</strong>
        <p>{post.body}</p>
      </div>
      <div className={css.post__btns}>
        <button>
          Видалити
        </button>
      </div>
    </div>
  )
}


PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem

