import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const BlogPostForm = ({onSubmit, init}) => {
  const [title, setTitle] = useState(init.title);
  const [post, setPost] = useState(init.post);

  return (
    <View style={styles.container}>
      <Text style={styles.blogHead}>Title</Text>
      <TextInput
        autoCorrect={true}
        autoCapitalize="none"
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.blogText}
        placeholder="Enter blog post title"
      />
      <Text style={styles.blogHead}>Post</Text>
      <TextInput
        autoCorrect={true}
        autoCapitalize="none"
        multiline
        value={post}
        onChangeText={text => setPost(text)}
        style={styles.blogText}
        placeholder="Enter blog post content"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (title.trim() !== '' && post.trim() !== '') {
            onSubmit(title, post);
          }
        }}>
        <Text style={styles.btnText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
  init: {
    title: '',
    post: '',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  blogHead: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  blogText: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    fontSize: 18,
    marginVertical: 20,
    borderRadius: 5,
  },
  btn: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: 'crimson',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
  btnText: {
    fontSize: 15,
    color: 'white',
  },
});

export default BlogPostForm;
