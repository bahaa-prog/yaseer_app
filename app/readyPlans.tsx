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
import BottomNavigation from '../components/BottomNavigation';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');

const planLocations = [
  {
    id: 1,
    title: 'أبها (العاصمة الإدارية لعسير)',
    subtitle: 'Abha (Administrative Capital of Asir)',
    description: 'استعرض المزيد'
  },
  {
    id: 2,
    title: 'السودة (طبيعة وجبال وضباب)',
    subtitle: 'Al-Soudah (Nature, Mountains, and Fog)',
    description: 'استعرض المزيد'
  },
  {
    id: 3,
    title: 'رجال ألمع (التراث والثقافة)',
    subtitle: 'Rijal Alma\' (Heritage and Culture)',
    description: 'استعرض المزيد'
  },
  {
    id: 4,
    title: 'الحبلة وطبب (الطبيعة والتاريخ)',
    subtitle: 'Al-Habalah and Tabbab (Nature and History)',
    description: 'استعرض المزيد'
  },
  {
    id: 5,
    title: 'فعاليات ومشتريات',
    subtitle: 'Events and Purchases',
    description: 'استعرض المزيد'
  }
];

export default function ReadyPlans() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <Header showBackButton={true} />

        {/* Section Tab */}
        <View style={styles.sectionTab}>
          <Text style={styles.sectionTabText}>الخطط الجاهزة</Text>
        </View>



        {/* Main Plan Card */}
        <View style={styles.planCardContainer}>
          <View style={styles.planCard}>
            {/* Plan Header */}
            <View style={styles.planHeader}>
              <View style={styles.planHeaderLeft}>
                <View style={styles.routeVisual}>
                  <View style={styles.locationPin}>
                    <Text style={styles.locationPinText}>📍</Text>
                  </View>
                  <View style={styles.dashedLine} />
                  <View style={styles.locationPin}>
                    <Text style={styles.locationPinText}>📍</Text>
                  </View>
                </View>
              </View>
              <View style={styles.planHeaderRight}>
                <Text style={styles.planTitle}>خطة لمدة 5 أيام</Text>
                <Text style={styles.planSubtitle}>نبدة عن الخطة</Text>
              </View>
            </View>

            {/* Plan Locations */}
            <View style={styles.locationsContainer}>
              {planLocations.map((location, index) => (
                <View key={location.id} style={styles.locationItem}>
                  <View style={styles.locationContent}>
                    <View style={styles.locationLeft}>
                      <View style={styles.locationPinSmall}>
                        <Text style={styles.locationPinSmallText}>📍</Text>
                      </View>
                      {index < planLocations.length - 1 && <View style={styles.verticalLine} />}
                    </View>
                    
                    <View style={styles.locationCenter}>
                      <Text style={styles.locationTitle}>{location.title}</Text>
                      <Text style={styles.locationSubtitle}>{location.subtitle}</Text>
                      <Text style={styles.locationDescription}>{location.description}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            {/* Buy Plan Button */}
            <TouchableOpacity style={styles.buyPlanButton}>
              <Text style={styles.buyPlanButtonText}>شراء الخطة</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab="home"
        onTabPress={(tab) => {
          console.log('Tab pressed:', tab);
          // Add navigation logic here
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

  sectionTab: {
    backgroundColor: '#81C784',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
  },
  sectionTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  planCardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  planCard: {
    backgroundColor: '#2E7D32',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  planHeaderLeft: {
    marginRight: 20,
  },
  routeVisual: {
    alignItems: 'center',
  },
  locationPin: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationPinText: {
    fontSize: 16,
    color: 'white',
  },
  dashedLine: {
    width: 2,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 5,
    borderStyle: 'dashed',
  },
  planHeaderRight: {
    flex: 1,
  },
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  planSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  locationsContainer: {
    marginBottom: 30,
  },
  locationItem: {
    marginBottom: 20,
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationLeft: {
    width: 40,
    alignItems: 'center',
    marginRight: 15,
  },
  locationPinSmall: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationPinSmallText: {
    fontSize: 12,
    color: 'white',
  },
  verticalLine: {
    width: 2,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 5,
  },
  locationCenter: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  locationSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  locationDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  buyPlanButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buyPlanButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});
