import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Typography from '../../components/Typography';
import { SIDE_SPACING } from '../../components/Header';
import Tag from '../AddChirpz/Tag';
import image from '../../assets/image';
import CollapsibleText from './CollapsibleText';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface comment {
  userId: string,
  commentId: string,
  userName: string,
  comment: string
}

export interface ItemT {
  apiId?: string,
  isVerified?: boolean,
  id: string,
  userName: string,
  caption: string,
  tags: string[],
  comments: comment[]
}

interface props {
  item: ItemT;
  index: number;
}

const Item = ({ item, index }: props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Typography style={{ left: -5, marginVertical: 5 }} size={18} color='#fff'>
          {item.userName}
        </Typography>
        {item.isVerified && (
          <Image
            style={styles.check}
            source={image.check}
          />
        )}
      </View>
      <CollapsibleText textAlign='justify' size={15} color='#A6B6D6'>
        {item.caption}
      </CollapsibleText>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
        {
          !!item.tags?.length && item.tags.map((tag, i) => {
            return (
              <Tag item={tag} index={i} key={tag + i.toString()} />
            )
          })
        }
      </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    paddingHorizontal: SIDE_SPACING,
    paddingVertical: 10,
    paddingTop: 30,
  },
  check: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10
  }
})