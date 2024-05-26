import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    // call your login api here
    setIsSubmitting(false);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-primary h-full">
        <View className="w-full justify-center min-h-[70vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-5"
            keyBoardType="email-address" // this is used to show the email keyboard
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
          />
          <CustomButton
            title="Log in"
            containerStyles="mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="flex-row justify-center items-center mt-5">
            <Text className="text-base text-white font-pmedium">
              Don't have an account?
            </Text>
            <Text className="text-base text-secondary font-pmedium ml-1">
              <Link href="/Signup">Sign up</Link>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Signin;
