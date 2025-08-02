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
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');

const groupTrips = [
  {
    id: 1,
    title: 'رحلة تراثية لمدة ٥ أيام',
    type: 'Heritage Trip',
    provider: 'سارة ياسر',
    gender: 'إناث',
    age: '٢١ فما فوق',
    backgroundImage: require('../assets/images/heritage_trip_image.jpg'),
  },
  {
    id: 2,
    title: 'رحلة هايكنق في أبها',
    type: 'Hiking Trip',
    provider: 'علي حسن',
    gender: 'إناث او ذكور',
    age: '٢١ فما فوق',
    backgroundImage: require('../assets/images/mountains.jpg'),
  }
];

export default function TogetherScreen() {

  const handleSubmitRequest = (tripId: number) => {
    console.log('Submit request for trip:', tripId);
    // Add submit request logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <Header />

        {/* Group Trips */}
        <View style={styles.tripsContainer}>
          {groupTrips.map((trip) => (
            <View key={trip.id} style={styles.tripCard}>
              {/* Main Trip Card */}
              <View style={styles.mainTripCard}>
                <Image 
                  source={trip.backgroundImage}
                  style={styles.cardBackgroundImage}
                  resizeMode="cover"
                />
                <View style={styles.cardOverlay}>
                  <View style={styles.tripHeader}>
                    <Text style={styles.tripTitle}>{trip.title}</Text>
                  </View>
                  
                  <View style={styles.tripActions}>
                    <TouchableOpacity 
                      style={styles.submitButton}
                      onPress={() => handleSubmitRequest(trip.id)}
                    >
                      <Text style={styles.submitButtonText}>تقديم طلب</Text>
                    </TouchableOpacity>
                    <Text style={styles.providerText}>مقدم الرحلة : {trip.provider}</Text>
                  </View>
                </View>
              </View>

              {/* Trip Details */}
              <View style={styles.tripDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailValue}>{trip.gender}</Text>
                  <Text style={styles.detailLabel}>الجنس :</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailValue}>{trip.age}</Text>
                  <Text style={styles.detailLabel}>العمر :</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>خط سير الرحلة :</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab="together"
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
  tripsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  tripCard: {
    marginBottom: 25,
  },
  mainTripCard: {
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 200,
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
    flex: 1,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  tripTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'right',
  },
  tripIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  tripIconText: {
    fontSize: 30,
  },
  patternBand: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  patternSquare: {
    width: 25,
    height: 25,
    backgroundColor: '#8D6E63',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  patternText: {
    fontSize: 12,
    color: '#D7CCC8',
  },
  tripActions: {
    alignItems: 'flex-start',
  },
  submitButton: {
    backgroundColor: '#81C784',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  providerText: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
    fontWeight: 'bold',
  },
  tripDetails: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  dottedLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#e0e0e0',
    borderStyle: 'dashed',
    marginRight: 10,
  },
});
