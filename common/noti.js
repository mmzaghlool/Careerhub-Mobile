import firebase from 'react-native-firebase'

export const fun = async () => {
    firebase.messaging().requestPermission()
        .then(async () => {

            await firebase.messaging().getToken()
                .then(token => {
                    console.log(token);

                })
                .catch(err => {
                    console.log(err);

                });
        })
}
