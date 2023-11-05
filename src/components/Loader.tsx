import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import React from 'react'

interface Props {
    visible: boolean
}

const Loader = ({ visible = false }: Props) => {
    return (
        <Modal animationType='fade' statusBarTranslucent visible={visible} transparent>
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={'#E88607'} />
            </View>
        </Modal>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000090',
        justifyContent: 'center',
        alignItems: 'center'
    }
})