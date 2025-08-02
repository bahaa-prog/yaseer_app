import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Navigate to login screen after splash
      router.replace('/login');
    }, 1500); // Show splash for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/yaseer_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.appName}>Yaseer App</Text>
        <Text style={styles.tagline}>Welcome to your journey</Text>
      </View>
    );
  }

  // This won't be shown since we navigate to login
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Welcome to Yaseer App!</Text>
      <Text style={styles.subText}>Your app is ready to go!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: width * 0.4, // Reduced to 40% of screen width
    height: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f9f0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
}); 