import createDataContext from './createDataContext';

// TYPES
const ADD_TO_BLOG = 'ADD_TO_BLOG';
const DEL_TO_BLOG = 'DEL_TO_BLOG';
const EDIT_TO_BLOG = 'EDIT_TO_BLOG';

const addBlogPost = dispatch => {
  return (title, post, callback) => {
    dispatch({
      type: ADD_TO_BLOG,
      payload: {title, post},
    });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({
      type: DEL_TO_BLOG,
      payload: id,
    });
  };
};

const editBlogPost = dispatch => {
  return (id, title, post, callback) => {
    dispatch({type: EDIT_TO_BLOG, payload: {id, title, post}});
    callback();
  };
};

// APP REDUCER
const blogReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BLOG:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          post: action.payload.post,
        },
      ];

    case DEL_TO_BLOG:
      return state.filter(blog => blog.id !== action.payload);

    case EDIT_TO_BLOG:
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [],
);
