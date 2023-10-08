import 'react-native-get-random-values'
import { v4 } from 'uuid'


const mapContacts = contact =>{
    const {
        name, picture, phone, cell, email
    
} = contact;
return {
    id: v4(),
    name: name.first + " " + name.last,
    avatar : picture.large,
    phone,
    cell,
    email,
    favorite : Math.random() >= 0.5,
};
};

const fetchContacts = async () =>{
    const data = await fetch("https://randomuser.me/api/?results=100&seed=fullstackio")
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
};

const fetchUserContacts = async () =>{
    const data = await fetch("https://randomuser.me/api/?seed=fullstackio")
    const userData = await data.json();
    return mapContacts(userData.results[0]);
}

const fetchRandomContacts = async () =>{
    const data = await fetch("https://randomuser.me/api/")
    const userData = await data.json();
    return userData.results.map(mapContacts);
}

export {fetchContacts,fetchUserContacts, fetchRandomContacts};