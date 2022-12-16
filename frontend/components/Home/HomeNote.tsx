import { View, StyleSheet, ScrollView } from 'react-native';
 
import theme from '../../theme';
import { BoldText, RegularText } from '../Text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeNote = () => {
    return (
      <ScrollView
        overScrollMode="never"
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={[theme.mt2, theme.mb2, styles.container]}
      >
        <View style={[styles.informationContainer, theme.ml2, theme.p3]}>
          <View>
            <RegularText style={[styles.regText, theme.fontSmall]}>
              생성한 쪽지
            </RegularText>
            <BoldText style={[theme.fontXl, styles.boldText]}>6개</BoldText>
          </View>
          <View style={theme.alignItemsEnd}>
            <MaterialCommunityIcons
              name="notebook-plus-outline"
              size={30}
              color={"#000"}
              style={theme.icon}
            />
          </View>
        </View>
        <View
          style={[styles.informationContainer, theme.ml2, theme.mr2, theme.p3]}
        >
          <View>
            <RegularText style={[styles.regText, theme.fontSmall]}>
              놓친 쪽지
            </RegularText>
            <BoldText style={[theme.fontXl, styles.boldText]}>6111개</BoldText>
          </View>
          <View style={theme.alignItemsEnd}>
            <MaterialCommunityIcons
              name="notebook-minus-outline"
              size={30}
              color={"#000"}
              style={theme.icon}
            />
          </View>
        </View>
        <View style={[styles.informationContainer, theme.mr2, theme.p3]}>
          <View>
            <RegularText style={[styles.regText, theme.fontSmall]}>
              펼쳐본 쪽지
            </RegularText>
            <BoldText style={[theme.fontXl, styles.boldText]}>632개</BoldText>
          </View>
          <View style={theme.alignItemsEnd}>
            <MaterialCommunityIcons
              name="notebook-check-outline"
              size={30}
              color={"#000"}
              style={theme.icon}
            />
          </View>
        </View>
        <View style={[styles.informationContainer, theme.mr2, theme.p3]}>
          <View>
            <RegularText style={[styles.regText, theme.fontSmall]}>
              전체
            </RegularText>
            <BoldText style={[theme.fontXl, styles.boldText]}>더보기</BoldText>
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : theme.colors.backgroundWhite
    },
    informationContainer: {
        width: 140,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 15,
        ...theme.flexDirectionColumn,
        ...theme.justifyContentBetween
    },
    regText: {
        color: "#555", 
        letterSpacing: -0.5,
    },
    nextText: {
        color: "#999", 
        letterSpacing: -0.5,
    },
    boldText: {
        color: "#000", 
        letterSpacing: -0.5,
        lineHeight: 30, 
    },
});

export default HomeNote;