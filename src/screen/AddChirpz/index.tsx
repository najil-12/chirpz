import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header, { SIDE_SPACING } from '../../components/Header';
import Input from '../../components/Input';
import Item from './Tag';
import Typography from '../../components/Typography';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { postData } from '../../redux/reducers/addPost';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Loader from '../../components/Loader';

type Props = StackScreenProps<RootStackParamList, 'Add'>;

const Add = ({ navigation }: Props) => {

  const [userName, setUserName] = useState<string>('')
  const [tagText, setTagText] = useState<string>('')
  const [caption, setCaption] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.addPost);


  const handleAddClick = () => {
    let arr = [...tags];
    arr.push(`#${tagText}`);
    setTags(arr)
    setTagText('')
  };

  const back = () => navigation.goBack()

  const isValid = userName.trim() && caption.trim() && tags.length > 0 // this is temporary for now only

  const post = async () => {
    if (!isValid) {
      Alert.alert(
        '', 'Please add data.'
      )
      return
    }
    const postDataExample = {
      caption,
      userName,
      tags
    };
    const response = await postData(dispatch, postDataExample);
    if (response.status) {
      navigation.goBack()
    }
  }

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <Header onLeftPress={back} onRightPress={post} postBtn />
      <View style={{ marginTop: 16, paddingHorizontal: SIDE_SPACING }}>
        <Input label='Name' onChangeText={setUserName} value={userName} placeholder="What's your nick name" />
        <Input label='Create' onChangeText={setCaption} value={caption} placeholder="What’s on your mind? " />
        <View style={styles.inputContainer}>
          <View style={{ flex: 1 }}>
            <Input label='Add Tags'
              onChangeText={setTagText}
              value={tagText}
              placeholder="Write tags"
            />
          </View>
          {!!tagText && (
            <TouchableOpacity
              onPress={handleAddClick}
              style={{ top: 10, alignSelf: 'center' }}>
              <Typography size={20} type='bold' color='#fff'>Add</Typography>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
          {tags.map((str: string, i: number) => {
            return <Item index={i} item={str} key={str + i.toString()} />
          })}
        </View>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    color: 'white',
    fontSize: 20
  },
  view: {
    marginTop: 30
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#142340'
  },
  container: {
    backgroundColor: '#091224',
    flex: 1,
  }
});
