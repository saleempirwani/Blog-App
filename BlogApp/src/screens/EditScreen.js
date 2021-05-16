import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/GlobalState';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {state, editBlogPost} = useContext(Context);

  const blogPost = state.find(blog => blog.id === id);

  return (
    <BlogPostForm
      init={{title: blogPost.title, post: blogPost.post}}
      onSubmit={(title, post) =>
        editBlogPost(id, title, post, () => navigation.pop())
      }
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
