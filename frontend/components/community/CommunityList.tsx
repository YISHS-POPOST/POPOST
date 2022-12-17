import { FlatList, View } from 'react-native';
import { ItemInterface } from "../../types/CommunityType";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import CommunityPostItem from '../../components/community/CommunityPostItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '@env';

type renderItemType = {item : ItemInterface }

const CommunityList = ({navigation} : ProfileScreenNavigationProp) => {
    const [list, setList] = useState();

    const getList = async () => {
        await axios.get(API_URL + "/communities").then(res => {
            setList(res.data);
        })
    }

    useEffect(() => {
        getList();
    }, [])


    // const info: ItemInterface[] = [
    //     list
    // ];

    const renderItem = ({item}: renderItemType) => {
        console.log(item);
        return (
            <CommunityPostItem 
                user_image={item.user_image}
                user_name={item.user.name}
                user_nickname={item.user.nickname}
                create_dt={item.create_dt}
                title={item.title}
                content={item.content}
                link={item.link}
                comment={item.comment}
                view={item.view}
                navigation={navigation}
            />
        );
    }

    return (
        <FlatList
            data={list}
            renderItem={renderItem}
            showsVerticalScrollIndicator ={false}
            showsHorizontalScrollIndicator={false}
        />
    );
}


export default CommunityList;