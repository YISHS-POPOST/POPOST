import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';

const FollowsAction = (follow_id: string) => {
    AsyncStorage.getItem("user_id", (err, res) => {
        const follower_id = res;
        axios.post(API_URL + "/follows/follow", { follow_id, follower_id })
            .then(res => {
                const msg = res.data.message;
                const type = res.data.type;

                switch (type) {
                    case "cancel":
                        Alert.alert('커뮤니티', msg, [{text: "확인"}]);
                        break;
                    case "success":
                        Alert.alert('커뮤니티', msg, [{text: "확인"}]);
                        break;
                    default:
                        break;
                }
            })
            .catch(err => {
                Alert.alert('커뮤니티', err.response.data.message, [{text: "확인"}]);
            })
    })
}

export default FollowsAction;