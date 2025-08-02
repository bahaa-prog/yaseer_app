import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function RecommendationsScreen() {
  const handleSendRecommendation = () => {
    console.log('Send recommendation pressed');
    // Add navigation logic here for sending recommendations
  };

  const handleFriendsRecommendations = () => {
    console.log('Friends recommendations pressed');
    // Add navigation logic here for viewing friends' recommendations
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>توصيات</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Options Container */}
        <View style={styles.optionsContainer}>
          {/* Send Recommendation Option */}
          <TouchableOpacity 
            style={styles.optionCard}
            onPress={handleSendRecommendation}
          >
            <View style={styles.optionContent}>
              <View style={styles.optionIcon}>
                <Text style={styles.optionIconText}>📤</Text>
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>ارسال توصية</Text>
                <Text style={styles.optionSubtitle}>شارك تجربتك مع الآخرين</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </View>
          </TouchableOpacity>

          {/* Friends Recommendations Option */}
          <TouchableOpacity 
            style={styles.optionCard}
            onPress={handleFriendsRecommendations}
          >
            <View style={styles.optionContent}>
              <View style={styles.optionIcon}>
                <Text style={styles.optionIconText}>👥</Text>
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>توصيات الأصدقاء</Text>
                <Text style={styles.optionSubtitle}>شاهد توصيات أصدقائك</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  optionCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  optionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f9f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionIconText: {
    fontSize: 24,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  arrowIcon: {
    fontSize: 20,
    color: '#999',
    fontWeight: 'bold',
  },
});
