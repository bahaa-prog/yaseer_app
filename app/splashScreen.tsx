import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Animated } from "react-native";
import { useEffect, useState, useRef } from "react";
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Navigate to login screen after splash
      router.replace('login' as any);
    }, 5000); // Show splash for 5 seconds

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, slideAnim]);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Animated.View 
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [
                { scale: scaleAnim },
                { translateY: slideAnim }
              ]
            }
          ]}
        >
          <Image 
            source={require('../assets/images/yaseer_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.Text 
          style={[
            styles.appName,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          يسير
        </Animated.Text>
        <Animated.Text 
          style={[
            styles.tagline,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          استكشف عسير عن طريق يسير
        </Animated.Text>
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
    backgroundColor: '#f0f9f0', // Light green background to match app theme
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: width * 0.6, // 60% of screen width
    height: width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  tagline: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
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
