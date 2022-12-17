import { Modal, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

type prop = {
    id: number
}

const CommunityCommentModal = ({id}:prop) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [comment, setCommment] = useState();

    const getComment = async () => {
        // await axios.post()
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    }

    useEffect(() => {
        getComment();
    }, [])
        

    console.log(id)

    return (
        <Modal
            animationType="slide"
            presentationStyle={"formSheet"}
            visible={modalVisible}
            style={styles.container}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
        >
            <Text>ㅎㅇ</Text>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 200,
    },
})

export default CommunityCommentModal;