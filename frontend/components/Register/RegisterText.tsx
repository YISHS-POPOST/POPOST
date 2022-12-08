import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import theme from '../../theme';
import { BoldText, RegularText } from '../../components/Text';

const RegisterText = () => {
    return (
        <View style={[theme.mt2, theme.alignItemsCenter]}>
            <RegularText>회원가입을 하셨습니까?
                <BoldText style={[{color: theme.colors.purple}]}>  로그인</BoldText>
            </RegularText>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default RegisterText;