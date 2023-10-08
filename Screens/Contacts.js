import React, {useState, useEffect}from 'react';
import {View, StyleSheet, Text, FlatList, ActivityIndicator} from 'react-native';
import { fetchContacts } from '../until/api';
import ContactListItem from '../components/ContactListItem';

const keyExtractor = ({phone}) => phone;

const Contacts = ({navigation}) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //load du lieu
    useEffect(()=>{
        fetchContacts().then(
            contacts=>{
                setContacts(contacts);
                setLoading(false);
                setError(false);
            }
        ).catch(e =>{
            console.log(e);
            setLoading(false);
            setError(true);
        })
    },[])

    const contactsSorted = contacts.sort((a,b)=> a.name.localeCompare(b.name));
    const renderContacts = ({item}) => {
        const { name, avatar, phone } = item;
        return <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate("Profile",{ contact: item })}
        />;
        };
    return (
       <View style={styles.container}>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text>Err...</Text>}
        {!loading && !error && (
            <FlatList
            data={contactsSorted}
            keyExtractor={keyExtractor}
            renderItem={renderContacts}
            />
        )}
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex:1,
        padding: 10,
        marginTop: 30,
    }
})

export default Contacts;