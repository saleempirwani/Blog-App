import React, {useContext, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Context} from '../context/GlobalState';

const ShowScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find(blog => blog.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', {id: blogPost.id})}>
          <Icon name="edit" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, blogPost.id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.post}>{blogPost.post}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  post: {
    fontSize: 18,
    textAlign: 'justify',
  },
  icon: {
    paddingRight: 15,
  },
});
