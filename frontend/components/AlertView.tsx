import { Alert } from 'react-native';

const AlertView = (title:string | number, msg:string | number) => {
    return Alert.alert(`${title}`, `${msg}`, [{text: '확인'}]);
}

export default AlertView;