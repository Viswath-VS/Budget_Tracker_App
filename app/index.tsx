import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full items-center justify-center min-h-[85vh] px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w--[380px] w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="relative mt-5">
              <Text className="text-center text-white  font-bold text-3xl">
                Manage your finances like a{" "}
                <Text className="text-secondary-200"> Pro</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2.5 left-32"
                resizeMode="contain"
              />
            </View>
            <Text className="text-center font-pregular text-gray-100 mt-7 text-sm">
              Managing your finances is now easier than ever with this app.
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("Signup")}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
