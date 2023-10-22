import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { fetchContacts } from '../until/api';
import ContactThumbnail from '../components/ContactThum';
import colors from '../until/color'

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
    const { contacts, loading, error } = useSelector((state) => state);

    useEffect(() => {
        fetchContacts()
            .then(
                (contacts) => {}
            )
            .catch(
                (e) => {}
            );
    }, []); 

    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar } = item;
        return (
            <ContactThumbnail
                avatar={avatar}
                onPress={() => navigation.navigate('Profile', { contact: item })} 
            />
        );
    };

    const favorites = contacts.filter((contact) => contact.favorite);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={favorites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    contentContainerStyle={styles.list}
                    renderItem={renderFavoriteThumbnail}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        flex: 1,
    },
    list: {
        alignItems: 'center',
    },
});

export default Favorites;