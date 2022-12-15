import { View, StyleSheet} from "react-native";

import { BoldText, RegularText } from '../Text';
import theme from '../../theme';

import RegisterTitle from '../../components/Register/RegisterTitle';
import RegisterForm from '../../components/Register/RegisterForm';
import RegisterText from '../../components/Register/RegisterText';
import RegisterButton from '../../components/Register/RegisterButton';
import { ProfileScreenNavigationProp } from '../../types/NavigateType';

const RegisterContent = ({navigation}:ProfileScreenNavigationProp) => {
    return (
        <View style={styles.container}>
            <RegisterTitle />
            <RegisterForm navigation={navigation}/>
            <RegisterText />
            <RegisterButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default RegisterContent;