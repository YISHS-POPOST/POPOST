import { getLinkPreview } from "link-preview-js";
import { useEffect, useState } from "react";
import { View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { BoldText, RegularText } from "../../components/Text";

interface metaDataType {
    title: string;
    description: string;
    image: string;
}

type prop = {
  siteUrl : string;
}

const CommunityLinkPreview = ({siteUrl}: prop)  => {
    const [metaData, setMetaData] = useState<any>();

    useEffect(() => {
      getLinkPreview(`${siteUrl}`).then((data : any ) => {
        setMetaData({
            titie: `${data.title}`,
            description: `${data.description}`,
            image: `${data.images[0]}`,
            site: `${siteUrl}`,
          });
      })
      .catch(err => setMetaData(false));
    }, []);

    return !metaData ? null : (
      <TouchableOpacity activeOpacity={0.8} onPress={() => Linking.openURL(`${metaData.site}`)}>
        <View style={[styles.container, theme.flexDirectionRow, theme.justifyContentBetween]}>
            <View style={[theme.p2, styles.textContainer]}>
              <BoldText style={[styles.text]}>
                {
                  metaData.titie.length < 20 ? metaData.titie : metaData.titie.substr(0, 20)
                }
              </BoldText>
              <RegularText style={[styles.text]}>
                {
                  metaData.description.length < 65 ? metaData.description : metaData.description.substr(0, 65) + "..."
                }
              </RegularText>
            </View>
            <View style={[styles.image]}>
                <Image source={{uri : `${metaData.image}`}} style={[styles.image]} />
            </View>
        </View>
      </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        height: 100,
        borderWidth : .5,
        borderColor : '#d6d6d6',
        borderRadius: 6,
    },
    textContainer: {
      width: 250
    },
    image: {
      borderBottomRightRadius: 6,
      borderTopRightRadius: 6,
      width: 110,
      height: 100,
    },
    text: {
      letterSpacing: -.5,
      color : '#333'
    },
});

export default CommunityLinkPreview;