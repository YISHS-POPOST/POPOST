import { SafeAreaView } from "react-native";
import theme from "../theme";
import RegisterHeader from '../components/Register/RegisterHeader';
import RegisterContents from '../components/Register/RegisterContent';
import { ProfileScreenNavigationProp } from '../types/NavigateType';

const RegistarScreen = ({navigation} : ProfileScreenNavigationProp) => {
    return (
        <SafeAreaView style={[theme.container]}>
            <RegisterHeader />
            <RegisterContents navigation={navigation} />
        </SafeAreaView>
    );
}

export default RegistarScreen;
