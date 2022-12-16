import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Entypo from "react-native-vector-icons/Entypo";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { BoldText } from '../../components/Text';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../src/type/state';
import axios from 'axios';
import AlertView from '../AlertView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from "@env";

const CommunityWriteHeader = (navigation: ProfileScreenNavigationProp) => {
  const data = useSelector((state:StateInterface) => state.community);

  const communityWriteAction = () => {
    AsyncStorage.getItem("user_id", (err, res:any) => {
      data.user_id = res;

      if(!data.title || !data.content || !data.user_id) return AlertView("커뮤니티", "모든 항목은 필수입니다.");

      axios.post(API_URL + "/communities/writing", data)
        .then(res => {
          
        })
        .catch(res => {
          
        })
    })
  }

  return (
        <View style={[theme.justifyContentBetween, theme.flexDirectionRow, theme.alignItemsCenter, styles.container]}>
          <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
            <Entypo name="chevron-left" onPress={() => navigation.pop()} size={30} color={theme.colors.purple} />
            <BoldText style={[styles.text, theme.fontXl, theme.ml1]}>글쓰기</BoldText>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={communityWriteAction}>
            <BoldText style={[styles.button, theme.pt1, theme.pb1, theme.pr2, theme.pl2, theme.mr4]}>저장</BoldText>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        backgroundColor: theme.colors.softBlue,
        color: theme.colors.blue,
        borderRadius: 5,
    },
    text: {
      color: "#000",
      letterSpacing: -0.5,
    },
});

export default CommunityWriteHeader;