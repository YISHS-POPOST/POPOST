import { View, StyleSheet } from "react-native";
import theme from '../../theme';
import { BoldText, RegularText } from '../../components/Text';

import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const RegisterText = ({navigation} : ProfileScreenNavigationProp) => {
    return (
        <View style={[theme.mt2, theme.flexDirectionRow, theme.justifyContentCenter]}>
            <RegularText>회원가입을 하셨습니까?</RegularText>
            <BoldText style={[{color: theme.colors.purple}]} onPress={() => navigation.navigate("login")}>  로그인</BoldText>
        </View>
    );
}

export default RegisterText;