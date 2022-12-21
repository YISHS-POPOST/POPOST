import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../theme";
import { BoldText } from "../../components/Text";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import ProfileEditNextButton from "../../components/profile/edit/ProfileEditNextButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../src/stores";
import { Profile } from "../../src/type/profile";
import { useState, useEffect } from "react";
import { nextPage } from "../../assets/fnc/profileEditNextPage";
// 이름 , 소개 , 별명
// 이메일 , 전화번호 변경 인증은 추후 배포 후 생각.

const ProfileEditNameScreen = () => {
  const [userName, setUserName] = useState<string>();
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: StateInterface) => state.users);
  const profile = useSelector((state: StateInterface) => state.profile);

  useEffect(() => {
    setUserName(users.name);
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
            회원님의 이름을
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
          maxLength={30}
          placeholder="이름입력"
          onChangeText={text => {
            setUserName(text);
          }}
        >
          {userName}
        </TextInput>
      </View>
      <ProfileEditNextButton
        navigate="ProfileEditPhone"
        onPress={() => {
          nextPage("name", userName, dispatch, profile);
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

export default ProfileEditNameScreen;
