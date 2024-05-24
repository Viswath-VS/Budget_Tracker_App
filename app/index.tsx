import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text style={{}}>Budget Tracker</Text>
      <StatusBar style="auto" />
      <Link href="Profile">Profile</Link>
    </View>
  );
}
