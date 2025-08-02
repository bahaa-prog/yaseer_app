import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Fake credentials check
    if (email === 'bahaaalsulaiman@gmail.com' && password === '123456') {
      console.log('Login successful!');
      // Navigate to main screen
      router.replace('/mainScreen');
    } else {
      console.log('Invalid credentials');
      Alert.alert('خطأ', 'البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image 
        source={require('../assets/images/login_backgroun_image.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>يسير</Text>
        <Text style={styles.headerSubtitle}>مرحباً بك في عسير</Text>
        <Text style={styles.headerTagline}>استكشف عسير عن طريق يسير!</Text>
      </View>

      {/* Centered Login Form */}
      <View style={styles.formWrapper}>
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Text style={styles.inputIconText}>👤</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="البريد الإلكتروني"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textAlign="right"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Text style={styles.inputIconText}>🔒</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="كلمة المرور"
              placeholderTextColor="#666"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              textAlign="right"
            />
          </View>

          {/* Remember Me & Forgot Password */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity 
              style={styles.rememberMeContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.rememberMeText}>تذكرني</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>نسيت كلمة المرور؟</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>تسجيل الدخول</Text>
          </TouchableOpacity>

          {/* Create Account */}
          <View style={styles.createAccountContainer}>
            <Text style={styles.createAccountText}>ليس لديك حساب؟</Text>
            <TouchableOpacity>
              <Text style={styles.createAccountLink}>إنشاء حساب جديد</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  header: {
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingBottom: 40,
    zIndex: 1,
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'right',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 8,
  },
  headerTagline: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'right',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginLeft: 20,
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    zIndex: 1,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    backdropFilter: 'blur(10px)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  inputIcon: {
    marginRight: 12,
  },
  inputIconText: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: 'white',
  },
  checkmark: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  rememberMeText: {
    color: '#333',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#4CAF50',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  createAccountContainer: {
    alignItems: 'center',
  },
  createAccountText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
  },
  createAccountLink: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
