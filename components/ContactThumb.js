import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropType from 'prop-types'
import color from '../until/color';

const ContactThum = ({ name, phone, avatar, textColor, onPress }) => {
    const colorStyle = {
        color: textColor,
    }

    const ImageContact = onPress ? TouchableOpacity : View;

    return (
        <View style={style.container}>
            <ImageContact onPress={onPress}>
                source{{
                    uri: avatar,
                }}
            </ImageContact>

            {name !== '' && <Text style={[style.name, colorStyle]}>{name}</Text>}

            {phone !== '' && (
                <View style={styles.phoneSection}>
                    <Icon name='phone' size={16} style={{ color: textColor }} />
                    <Text style={[styles.phone, colorStyle]}>{phone}</Text>
                </View>
            )}
        </View>
    )
};

export default ContactThum;

ContactThum.PropType = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
}

ContactThum.defautProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress: 'null'
}
const styles = StyleSheet.create({
    container :{
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatar :{
        width:90,
        height:90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name:{
        fontSize:20,
        marginTop:24,
        marginBottom:2,
        fontWeight: 'bold',
    },
    phoneSection:{
        flexDirection:'row',
        marginTop:4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phone:{
        marginLeft:4,
        fontSize:16,
        fontWeight:'bold',
    }
})