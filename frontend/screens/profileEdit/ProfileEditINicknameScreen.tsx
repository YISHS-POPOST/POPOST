import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../theme";
import { BoldText } from "../../components/Text";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../src/type/state";
import ProfileEditNextButton from "../../components/profile/edit/ProfileEditNextButton";
import { nextPage } from "../../assets/fnc/profileEditNextPage";
import { useState, useEffect } from "react";
import { AppDispatch } from "../../src/stores";
// 이름 , 소개 , 별명
// 이메일 , 전화번호 변경 인증은 추후 배포 후 생각.

const ProfileEditNicknameScreen = () => {
  const [nickname, setNickname] = useState<string | null>();
  const profile = useSelector((state: StateInterface) => state.profile);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setNickname(profile.nickname);
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
          {!profile.nickname ? (
            <>
              <BoldText style={[styles.titleText, theme.fontTitleSize]}>
                회원님의 별명을
              </BoldText>
              <BoldText style={[styles.titleText, theme.fontTitleSize]}>
                입력해주세요.
              </BoldText>
            </>
          ) : (
            <>
              <BoldText style={[styles.titleText, theme.fontTitleSize]}>
                회원님의 별명을
              </BoldText>
              <BoldText style={[styles.titleText, theme.fontTitleSize]}>
                변경하시겠습니까?
              </BoldText>
            </>
          )}
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
          placeholder="별명입력"
          onChangeText={text => {
            setNickname(text);
          }}
        >
          {nickname}
        </TextInput>
      </View>
      <ProfileEditNextButton
        navigate="ProfileEditIntroduce"
        onPress={() => {
          nextPage("nickname", nickname, dispatch, profile);
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

export default ProfileEditNicknameScreen;
