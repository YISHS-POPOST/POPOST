import { FlatList, View } from 'react-native';
import { ItemInterface } from "../../types/CommunityType";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import CommunityPostItem from '../../components/community/CommunityPostItem';

type renderItemType = {item : ItemInterface }

const CommunityList = ({navigation} : ProfileScreenNavigationProp) => {
    const info: ItemInterface[] = [
        {
            user_image: require("../../assets/image/profile/test_profile.jpg"),
            user_name: "배아무개",
            create_dt: "2022-02-02",
            title: "내 청소구역을 도와줘 !!",
            contents: "작년에 선풍적인 인기를 끌었던 내 청소구역을 도와줘!!", 
            link: "0",
            // link: "http://ai-design.or.kr",
            comment: 1,
            view: 123,
        },
        {
            user_image: require("../../assets/image/profile/test_profile.jpg"),
            user_name: "노아무개",
            create_dt: "2022-02-02",
            title: "내 청소구역을 도와줘 !!",
            contents: "작년에 선풍적인 인기를 끌었던 내 청소구역을 도와줘!!", 
            link: "0",
            // link: "https://www.dnd-lab.com/",
            comment: 1,
            view: 123,
        },
        {
            user_image: require("../../assets/image/profile/test_profile.jpg"),
            user_name: "최아무개",
            create_dt: "2022-02-02",
            title: "내 청소구역을 도와줘 !!",
            contents: "작년에 선풍적인 인기를 끌었던 내 청소구역을 도와줘!!", 
            link: "0",
            // link: "https://yosuis.hs.jne.kr/user/indexMain.action?siteId=yosuis_hs",
            comment: 1,
            view: 123,
        },
        {
            user_image: require("../../assets/image/profile/test_profile.jpg"),
            user_name: "김아무개",
            create_dt: "2022-02-02",
            title: "내 청소구역을 도와줘 !!",
            contents: "작년에 선풍적인 인기를 끌었던 내 청소구역을 도와줘!!", 
            link: "0",
            // link: "https://namu.wiki/w/%EC%97%AC%EC%88%98%EC%A0%95%EB%B3%B4%EA%B3%BC%ED%95%99%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90",
            comment: 1,
            view: 123,
        },
    ];

    const renderItem = ({item}: renderItemType) => {
        return (
            <CommunityPostItem 
                user_image={item.user_image}
                user_name={item.user_name}
                create_dt={item.create_dt}
                title={item.title}
                contents={item.contents}
                link={item.link}
                comment={item.comment}
                view={item.view}
                navigation={navigation}
            />
        );
    }

    return (
        <FlatList
            data={info}
            renderItem={renderItem}
            showsVerticalScrollIndicator ={false}
            showsHorizontalScrollIndicator={false}
        />
    );
}


export default CommunityList;