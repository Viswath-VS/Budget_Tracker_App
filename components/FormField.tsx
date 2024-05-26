import {
  View,
  Text,
  TextInput,
  KeyboardType,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyBoardType?: string;
}
const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyBoardType,
  placeholder,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base  text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row w-full h-16 border-2 border-black-200 rounded-2xl items-center focus:border-secondary px-4 bg-black-100">
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          className="flex-1 text-white text-base font-psemibold"
          // keyboardType={keyBoardType as KeyboardType}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-5 h-5 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
