import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import theme from "../../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useCameraDevices,
  Camera,
  CameraPermissionStatus,
} from "react-native-vision-camera";

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileEditCameraModal = (props: Props) => {
  const { modalVisible, setModalVisible } = props;
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] =
    useState<CameraPermissionStatus>();

  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back;

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      style={[theme.container]}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <View style={[theme.container, styles.container]}>
          <Pressable
            style={[theme.pt2]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons name="ios-close" color="#fff" size={25} />
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    width: 500,
    height: 500,
  },
});

export default ProfileEditCameraModal;
