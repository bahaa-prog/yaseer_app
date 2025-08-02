import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { router } from 'expo-router';

interface BottomNavigationProps {
  activeTab?: 'home' | 'personalized' | 'together' | 'account';
  onTabPress?: (tab: string) => void;
}

export default function BottomNavigation({ 
  activeTab = 'home', 
  onTabPress 
}: BottomNavigationProps) {
  const handleTabPress = (tab: string) => {
    if (onTabPress) {
      onTabPress(tab);
    }
    
    // Handle navigation
    switch (tab) {
      case 'home':
        router.push('/mainScreen');
        break;
      case 'personalized':
        router.push('/forYouScreen');
        break;
      case 'together':
        router.push('/togetherScreen');
        break;
      case 'account':
        router.push('/accountScreen');
        break;
    }
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'home' && styles.activeNavItem]} 
        onPress={() => handleTabPress('home')}
      >
        <Image 
          source={require('../assets/icons/home_icon(2).png')}
          style={[styles.navIconImage, activeTab === 'home' && styles.activeNavIconImage]}
        />
        <Text style={[styles.navText, activeTab === 'home' && styles.activeNavText]}>الرئيسية</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'personalized' && styles.activeNavItem]} 
        onPress={() => handleTabPress('personalized')}
      >
        <Image 
          source={require('../assets/icons/ai_icon.png')}
          style={[styles.navIconImage, activeTab === 'personalized' && styles.activeNavIconImage]}
        />
        <Text style={[styles.navText, activeTab === 'personalized' && styles.activeNavText]}>يسير ai</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'together' && styles.activeNavItem]} 
        onPress={() => handleTabPress('together')}
      >
        <Image 
          source={require('../assets/icons/together_icon.png')}
          style={[styles.navIconImage, activeTab === 'together' && styles.activeNavIconImage]}
        />
        <Text style={[styles.navText, activeTab === 'together' && styles.activeNavText]}>قروب رحلة</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'account' && styles.activeNavItem]} 
        onPress={() => handleTabPress('account')}
      >
        <Image 
          source={require('../assets/icons/profile_icon.png')}
          style={[styles.navIconImage, activeTab === 'account' && styles.activeNavIconImage]}
        />
        <Text style={[styles.navText, activeTab === 'account' && styles.activeNavText]}>حسابي</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#2E7D32',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  activeNavItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  navIcon: {
    fontSize: 20,
    color: 'white',
  },
  activeNavIcon: {
    color: '#ffffff',
  },
  navText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeNavText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  navIconImage: {
    width: 24,
    height: 24,
    tintColor: 'white',
    opacity: 1,
  },
  activeNavIconImage: {
    tintColor: 'white',
    opacity: 1,
  },
}); 