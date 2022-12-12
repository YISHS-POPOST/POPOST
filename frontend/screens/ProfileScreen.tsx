import {SafeAreaView , Image, StyleSheet} from 'react-native';
import theme from '../theme';


const ProfileScreen = () => {
    return (
        <SafeAreaView style={[styles.container , theme.pt4 , theme.pb4 , theme.container]}>
            <Image source={require('../assets/image/profile/test_profile.jpg')} style={[styles.image]} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
    },
    image : {
        width : 100,
        height : 100,    
    }
});

export default ProfileScreen;