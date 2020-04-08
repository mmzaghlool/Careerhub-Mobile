import AsyncStorage from '@react-native-community/async-storage'
import { API_LINK, USER } from './Constants';
import firebase from 'react-native-firebase';

export const updateUser = async () => {
    const fbUser = firebase.auth().currentUser;
    console.log('fbUser', fbUser.uid);
    

    await fetch(`${API_LINK}/users/getUser/${fbUser.uid}`)
        .then(res => res.json())
        .then(async res => {

            console.log('update user res: ', res);

            if (res.success) {
                const user = res.user;
                const userString = await JSON.stringify(user);

                await AsyncStorage.setItem(USER, userString)
                return user;
            } else {
                const { message } = res;
                alert(message)
                return undefined
            }

        })
        .catch(err => {
            console.log('update user err: ', err);
            alert(JSON.stringify(err))
            return undefined
        })
}