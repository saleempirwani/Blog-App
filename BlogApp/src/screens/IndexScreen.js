import React, {useContext, useLayoutEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityComponent,
} from 'react-native';
import {Context} from '../context/GlobalState';
import Icon from 'react-native-vector-icons/Feather';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost} = useContext(Context);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Icon name="plus" size={30} style={styles.icon} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (!state.length) {
    return (
      <View style={styles.noPost}>
        <Text style={styles.noPostText}>
          No blog post found, try to add some.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.list}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Icon name="trash" size={25} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  noPost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  noPostText: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#333',
    borderBottomWidth: 0.6,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    paddingRight: 10,
  },
});
