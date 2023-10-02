import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.text}>
            Welcome to Daily Routine Tracker!
          </Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.instructions}>
            Track your daily routine and build healthy habits with ease.
          </Text>
          <Text style={styles.instructions}>
            Simply add your daily tasks and we'll take care of the rest.
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Your Name</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center",
    marginBottom: 40
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "700",
    marginBottom: 20
  },
  instructions: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "500",
    marginBottom: 10
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "700",
    marginBottom: 20
  }
});
export default WelcomeScreen;