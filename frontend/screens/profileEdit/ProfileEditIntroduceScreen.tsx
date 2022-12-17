import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../theme";
import { BoldText } from "../../components/Text";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import ProfileEditNextButton from "../../components/profile/edit/ProfileEditNextButton";
import { SafeAreaView } from "react-native-safe-area-context";
// 이름 , 소개 , 별명
// 이메일 , 전화번호 변경 인증은 추후 배포 후 생각.

const ProfileEditIntroduceScreen = () => {
  const users = useSelector((state: StateInterface) => state.users);

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
          {!users.introduce ? (
            <>
              <BoldText style={[styles.titleText, theme.fontTitleSize]}>
                회원님의 소개를
              </BoldText>
              <BoldText style={[styles.titleText, theme.fontTitleSize]}>
                입력해주세요!
              </BoldText>
            </>
          ) : (
            <>
              <BoldText style={[styles.titleText, theme.fontTitleSize]}>
                회원님의 소개를
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
            theme.fontBase,
            theme.sectionBorderRadius,
          ]}
          multiline={true}
          maxLength={500}
          placeholder="소개입력 (최대 500자)"
        >
          {users.introduce}
        </TextInput>
      </View>
      <ProfileEditNextButton navigate="ProfileEditSuccess" />
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
    maxHeight: 300,
    flexShrink: 2,
    backgroundColor: theme.colors.backgroundWhite,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  container: {
    flex: 1,
  },
});

export default ProfileEditIntroduceScreen;
