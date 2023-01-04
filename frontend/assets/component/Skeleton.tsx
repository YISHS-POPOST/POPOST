import { useEffect, useRef } from "react";
import { StyleProp, StyleSheet, View, ViewStyle, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface SkeletonProps {
  width: number ;
  height: number ;
  style: StyleProp<ViewStyle>;
}

const Skeleton = ({ width, height, style }: SkeletonProps) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  }, [width]);

  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: "rgba(0 , 0 , 0 , 0.12)",
          overflow: "hidden",
          position: "relative",
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          {
            width: "100%",
            height: "100%",
            transform: [{ translateX }],
            left: 0,
          },
        ]}
      >
        <LinearGradient
          style={{ width, height }}
          colors={["transparent", "rgba(0,0,0,0.05)", "transparent"]}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;
