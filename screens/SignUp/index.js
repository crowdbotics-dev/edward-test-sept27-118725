import React from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

const SignUpScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create an Account</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Repeat Password" secureTextEntry={true} />
        <Text style={styles.or}>or</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#3b5998",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  },
  loginText: {
    color: "#3b5998",
    fontSize: 18
  },
  or: {
    fontSize: 18,
    marginBottom: 20
  }
});