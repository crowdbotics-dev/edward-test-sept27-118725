import { StyleSheet } from "react-native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const SignUpScreen = () => {
  return <SafeAreaView style={_styles.BsivlcPQ}>
      <View style={_styles.jZSqNDNP}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.BrcrTQAy} />
        <Text style={_styles.VmbRRrJB}>Create an Account</Text>
        <TextInput placeholder="Email" style={_styles.CJOWboBi} />
        <TextInput placeholder="Password" secureTextEntry={true} style={_styles.ASlmOwZN} />
        <TouchableOpacity style={_styles.lpsoGddr}>
          <Text style={_styles.hTgLucCB}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.sBTvQLgt}>
          <Text style={_styles.DELAYDrt}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.AOsXRaTS}>
          <Text style={_styles.MAIJJJNM}>Sign up with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={_styles.inmJptiP}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default SignUpScreen;

const _styles = StyleSheet.create({
  BsivlcPQ: {
    flex: 1
  },
  jZSqNDNP: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  BrcrTQAy: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  VmbRRrJB: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  CJOWboBi: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  ASlmOwZN: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  lpsoGddr: {
    width: "80%",
    height: 50,
    backgroundColor: "#3b5998",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  hTgLucCB: {
    color: "#fff",
    fontSize: 18
  },
  sBTvQLgt: {
    width: "80%",
    height: 50,
    backgroundColor: "#db4437",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  DELAYDrt: {
    color: "#fff",
    fontSize: 18
  },
  AOsXRaTS: {
    width: "80%",
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  MAIJJJNM: {
    color: "#000",
    fontSize: 18
  },
  inmJptiP: {
    color: "#3b5998",
    fontSize: 18
  }
});