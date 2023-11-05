import { View, TouchableOpacity, StatusBar, FlatList, Image, ListRenderItem, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Item, { ItemT } from './Item';
import image from '../../assets/image';
import { RootStackParamList } from '../../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchPosts } from '../../redux/reducers/postsSlice';
import Loader from '../../components/Loader';
import { useIsFocused } from '@react-navigation/native';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {

  const _renderItem: ListRenderItem<ItemT> = ({ item, index }) => <Item item={item} index={index} />;

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.posts);
  const focused = useIsFocused()

  useEffect(() => {
    if (focused) {
      fetchPosts(dispatch)
    }
  }, [focused]);

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <Header leftIcon={image.user} iconSize={40} title={'Chirpz'} />
      <FlatList data={data} renderItem={_renderItem} />
      <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', bottom: 15, right: 15 }}
        onPress={() => navigation.navigate('Add')}>
        <Image style={{
          height: 60,
          width: 60,
          alignSelf: 'flex-end',
        }} source={image.add} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#091224',
    flex: 1
  }
})
