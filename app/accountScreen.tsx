import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import BottomNavigation from '../components/BottomNavigation';

const { width, height } = Dimensions.get('window');

const accountSections = [
  {
    id: 1,
    title: 'معلوماتي',
    icon: '👤',
    hasArrow: true
  },
  {
    id: 2,
    title: 'المحفظة',
    icon: '💰',
    hasArrow: true
  },
  {
    id: 3,
    title: 'الدعم الفني',
    icon: '🛠️',
    hasArrow: true
  },
  {
    id: 4,
    title: 'رحلاتي السابقة',
    icon: '📋',
    hasArrow: true
  },
  {
    id: 5,
    title: 'توصيات',
    icon: '💡',
    hasArrow: true
  }
];

export default function AccountScreen() {

  const handleSectionPress = (sectionId: number) => {
    console.log('Section pressed:', sectionId);
    // Add navigation logic here
    if (sectionId === 5) {
      // Navigate to recommendations screen
      router.push('/recommendationsScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Image Placeholder */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileImageText}>👤</Text>
            </View>
          </View>
          <Text style={styles.profileName}>بهاء السليمان</Text>
          <Text style={styles.profileEmail}>bahaaalsulaiman@gmail.com</Text>
        </View>

        {/* Account Sections */}
        <View style={styles.sectionsContainer}>
          {accountSections.map((section, index) => (
            <View key={section.id}>
              <TouchableOpacity 
                style={styles.sectionItem}
                onPress={() => handleSectionPress(section.id)}
              >
                <View style={styles.sectionLeft}>
                  <Text style={styles.sectionIcon}>{section.icon}</Text>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
                {section.hasArrow && (
                  <Text style={styles.arrowIcon}>›</Text>
                )}
              </TouchableOpacity>
              {index < accountSections.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => {
              // Navigate back to login screen
              router.replace('/login');
            }}
          >
            <Text style={styles.logoutButtonText}>تسجيل الخروج</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab="account"
        onTabPress={(tab) => {
          console.log('Tab pressed:', tab);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9f0',
  },
  scrollView: {
    flex: 1,
  },
  sectionsContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  arrowIcon: {
    fontSize: 20,
    color: '#999',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#2E7D32',
  },
  profileImageText: {
    fontSize: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  logoutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
