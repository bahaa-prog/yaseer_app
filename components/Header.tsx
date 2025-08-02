import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { router } from 'expo-router';

interface HeaderProps {
  showBackButton?: boolean;
  showMenuButton?: boolean;
  showNotificationButton?: boolean;
  userName?: string;
  userGreeting?: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
}

export default function Header({
  showBackButton = false,
  showMenuButton = false,
  showNotificationButton = true,
  userName = 'بهاء السليمان',
  userGreeting = 'هلا بك في عسير !',
  onBackPress,
  onMenuPress,
  onNotificationPress,
}: HeaderProps) {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  const handleMenuPress = () => {
    if (onMenuPress) {
      onMenuPress();
    } else {
      console.log('Menu pressed');
    }
  };

  const handleNotificationPress = () => {
    if (onNotificationPress) {
      onNotificationPress();
    } else {
      console.log('Notification pressed');
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        {showBackButton && (
          <TouchableOpacity style={styles.headerIcon} onPress={handleBackPress}>
            <Text style={styles.headerIconText}>←</Text>
          </TouchableOpacity>
        )}
        {showMenuButton && (
          <TouchableOpacity style={styles.headerIcon} onPress={handleMenuPress}>
            <Text style={styles.headerIconText}>⋮</Text>
          </TouchableOpacity>
        )}
        {showNotificationButton && (
          <TouchableOpacity style={styles.headerIcon} onPress={handleNotificationPress}>
            <Image 
              source={require('../assets/icons/notification_icon.png')}
              style={styles.headerIconImage}
            />
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.userSection}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userGreeting}>{userGreeting}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'transparent',
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 10,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconText: {
    fontSize: 18,
    color: '#333',
  },
  headerIconImage: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userInfo: {
    alignItems: 'flex-end',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userGreeting: {
    fontSize: 14,
    color: '#666',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
  },
}); 