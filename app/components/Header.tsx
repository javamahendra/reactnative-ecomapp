import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";
import { HeaderProps } from "../constants/types";

export default function Header({
  title,
  showBack,
  showCart,
  showMenu,
  showSearch,
  showLogo,
}: HeaderProps) {
  const router = useRouter();
  const { itemCount } = { itemCount: 6 };

  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white">
      {/* Left Section */}
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showMenu && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showLogo ? (
          <View className="flex-1">
            <Image
              source={require("@/assets/logo.png")}
              style={{ width: "100%", height: 24 }}
              resizeMode="contain"
            />
          </View>
        ) : (
          title && (
            <Text className="text-xl font-bold text-primary text-center flex-1 mr-8">
              {title}
            </Text>
          )
        )}

        {!title && !showSearch && <View className="flex-1" />}
      </View>
      {/* Right Section */}
      <View className="flex-row items-center gap-4">
        {showSearch && (
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity>
            <View className="relative">
              <Ionicons name="bag-outline" size={24} color={COLORS.primary} />
              <View className="absolute -top-1 -right-1 bg-acecent rounded-full w-4 h-4">
                <Text className="text-white text-[10px] font-bold">
                  {itemCount}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
