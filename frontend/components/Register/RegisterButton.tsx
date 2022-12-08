import { View, Pressable, StyleSheet } from 'react-native';

import theme from "../../theme";
import PressButton from "../PressButton";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const RegisterButton = () => {
    return (
        <View style={theme.mt5}>
          <PressButton
            style={styles.buttonSocial}
            textStyle={styles.buttonSocialText}
            content="다른 소셜미디어로 회원가입"
          />
        </View>
      );
}

const styles = StyleSheet.create({
    buttonSocial: {
      backgroundColor: theme.colors.red,
      borderColor: "#ddd",
      borderWidth: 1,
    },
    buttonSocialText: {
      color: "#fff",
    },
  });


export default RegisterButton;