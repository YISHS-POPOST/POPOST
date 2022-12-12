import { SafeAreaView } from "react-native";

import theme from "../theme";
import {BoldText} from "../components/Text";

import RegisterHeader from '../components/Register/RegisterHeader';
import RegisterContents from '../components/Register/RegisterContent';
import RegisterForm from '../components/Register/RegisterForm';

const RegistarScreen = () => {
    return (
        <SafeAreaView style={[theme.container]}>
            <RegisterHeader />
            <RegisterContents />
        </SafeAreaView>
    );
}

export default RegistarScreen;
