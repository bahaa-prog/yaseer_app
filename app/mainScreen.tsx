import React from 'react';
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
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <Header />

        {/* Service Cards */}
        <View style={styles.cardsContainer}>
          {/* Tourist Guide Card */}
          <TouchableOpacity style={styles.card} onPress={() => router.push('/guiderScreen')}>
            <Image 
              source={require('../assets/images/guider.png')}
              style={styles.cardBackgroundImage}
              resizeMode="cover"
              blurRadius={0.7}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.overlayText}>مرشد سياحي</Text>
            </View>
          </TouchableOpacity>

          {/* Ready Plans Card */}
          <TouchableOpacity style={styles.card} onPress={() => router.push('/readyPlans')}>
            <Image 
              source={require('../assets/images/readyPlans(2).jpg')}
              style={styles.cardBackgroundImage}
              resizeMode="cover"
              blurRadius={0.7}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.overlayText}>الخطط جاهزة</Text>
            </View>
          </TouchableOpacity>

          {/* Ask Locals Card */}
          <TouchableOpacity style={styles.card} onPress={() => router.push('/askPeopleScreen')}>
            <Image 
              source={require('../assets/images/askPeople.jpg')}
              style={styles.cardBackgroundImage}
              resizeMode="cover"
              blurRadius={0.7}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.overlayText}>اسأل اهل المنطقة</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab="home"
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
  cardsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 15,
    flex: 1,
  },
  card: {
    backgroundColor: '#2E7D32',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
    position: 'relative',
    height: 170,
    flex: 1,
  },
  cardBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    backgroundColor: 'rgba(46, 125, 50, 0.7)',
    flex: 1,
    padding: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardIconText: {
    fontSize: 30,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});