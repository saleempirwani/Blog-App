import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/GlobalState';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, post) =>
        addBlogPost(title, post, () => navigation.navigate('Home'))
      }
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
