import { PushNotificationIOS } from 'react-native';

export default () => {
    PushNotificationIOS.addEventListener('register', token => console.log('ios token: ', token));
    PushNotificationIOS.addEventListener('registrationError', error=> console.log('register ios error', error));
    PushNotificationIOS.addEventListener('notification', notification=> {
        console.log(notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    });
    
    PushNotificationIOS.requestPermissions();
}