import { Image, ImageProps, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import image from '../assets/image'
import Typography from './Typography'

export const SIDE_SPACING = 15

interface Props {
  leftIcon?: ImageProps;
  title?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  iconSize?: number
  postBtn?: boolean
}

const Header = ({ iconSize = 25, postBtn, title, leftIcon = image.back, onLeftPress, onRightPress }: Props) => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#091224'} barStyle={'light-content'} />
      <TouchableOpacity disabled={!onLeftPress} onPress={onLeftPress} style={{ flex: 1, paddingLeft: SIDE_SPACING }}>
        <Image source={leftIcon} style={{ height: iconSize, width: iconSize }} />
      </TouchableOpacity>
      <Typography textAlign='center' type='bold' style={{ flex: 1 }} size={20} color={'#fff'}>{title}</Typography>
      <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: SIDE_SPACING }}>
        {postBtn && <TouchableOpacity onPress={onRightPress} style={styles.postBtn} >
          <Typography size={17} color='#fff' type='bold'>Post</Typography>
        </TouchableOpacity>}
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: '#1C3059'
  },
  postBtn: {
    backgroundColor: '#E88607',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50
  }
})