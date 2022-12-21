import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../theme";
import { BoldText } from "../../components/Text";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../src/type/state";
import ProfileEditNextButton from "../../components/profile/edit/ProfileEditNextButton";
import { useEffect, useState } from "react";
import { nextPage } from "../../assets/fnc/profileEditNextPage";
import { AppDispatch } from "../../src/stores";

// 이름 , 소개 , 별명
// 이메일 , 전화번호 변경 인증은 추후 배포 후 생각.
const ProfileEditPhoneScreen = () => {
  const profile = useSelector((state: StateInterface) => state.profile);
  const dispatch = useDispatch<AppDispatch>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  useEffect(() => {
    setPhoneNumber(profile.phone);
  }, []);

  return (
    <View style={[styles.container]}>
      <View
        style={[
          theme.container,
          theme.flexDirectionColumn,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
        ]}
      >
        <View>
          <BoldText style={[styles.titleText, theme.fontTitleSize]}>
            회원님의 전화번호를
          </BoldText>
          <BoldText style={[styles.titleText, theme.fontTitleSize]}>
            변경하시겠습니까?
          </BoldText>
        </View>
        <TextInput
          style={[
            styles.textInput,
            theme.mt3,
            theme.pl2,
            theme.pr2,
            theme.fontWeightBold,
            theme.fontXxl,
          ]}
          maxLength={11}
          placeholder="전화번호변경"
          onChangeText={text => {
            const result = text.replace(/[^0-9]/g, "");
            setPhoneNumber(result);
          }}
          keyboardType="number-pad"
          value={phoneNumber}
        />
      </View>
      <ProfileEditNextButton
        navigate="ProfileEditEmail"
        onPress={() => {
          nextPage("phone", phoneNumber, dispatch, profile);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: "#333",
    textAlign: "center",
    overflow: "visible",
    height: 35,
  },
  textInput: {
    width: "100%",
    height: 50,
    borderBottomColor: theme.colors.purple,
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
  },
});

export default ProfileEditPhoneScreen;
