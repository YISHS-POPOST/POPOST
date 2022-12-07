import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import theme from "../theme";
import {BoldText} from "../components/Text";

import RegisterHeader from '../components/Login/LoginHeader';
import RegisterForm from '../components/Login/LoginForm';

const LoginScreen = () => {
    return (
        <SafeAreaView style={[theme.container, theme.ml3, theme.mr3]}>
            <RegisterHeader />
            <RegisterForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default LoginScreen;
