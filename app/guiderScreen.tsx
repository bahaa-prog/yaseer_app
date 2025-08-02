import React, { useState } from 'react';
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
import SearchBar from '../components/SearchBar';

const { width, height } = Dimensions.get('window');

const guides = [
  {
    id: 1,
    name: 'عادل الحربي',
    price: '40 ريال/ساعة',
    description: 'تعرف على المميزات التي يقدمها'
  },
  {
    id: 2,
    name: 'خالد أحمد',
    price: '35 ريال/ساعة',
    description: 'تعرف على المميزات التي يقدمها'
  },
  {
    id: 3,
    name: 'احمد يزيد',
    price: '45 ريال/ساعة',
    description: 'تعرف على المميزات التي يقدمها'
  },
  {
    id: 4,
    name: 'يوسف خليل',
    price: '42 ريال/ساعة',
    description: 'تعرف على المميزات التي يقدمها'
  },
  {
    id: 5,
    name: 'خالد زياد',
    price: '38 ريال/ساعة',
    description: 'تعرف على المميزات التي يقدمها'
  },
  {
    id: 6,
    name: 'زياد عمر',
    price: '41 ريال/ساعة',
    description: 'تعرف على المميزات التي يقدمها'
  }
];

export default function GuiderScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    // Add search logic here if needed
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <SearchBar 
          placeholder="بحث عن مرشد سياحي"
          value={searchQuery}
          onChangeText={handleSearch}
          showFilterIcon={true}
        />

        {/* Main Tourist Guide Card */}
        <View style={styles.mainCardContainer}>
          <View style={styles.mainCard}>
            <View style={styles.mainCardContent}>
              <View style={styles.mainCardIcon}>
                <Text style={styles.mainCardIconText}>👨‍🏫</Text>
              </View>
              <View style={styles.mainCardTextContainer}>
                <Text style={styles.mainCardTitle}>المرشد السياحي</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Guides List */}
        <View style={styles.guidesContainer}>
          {guides.map((guide, index) => (
            <View key={guide.id} style={styles.guideItem}>
              <View style={styles.guideContent}>
                <View style={styles.guideLeft}>
                  <Text style={styles.guidePrice}>{guide.price}</Text>
                </View>
                
                <View style={styles.guideCenter}>
                  <Text style={styles.guideName}>{guide.name}</Text>
                  <Text style={styles.guideDescription}>{guide.description}</Text>
                </View>
                
                <View style={styles.guideRight}>
                  <View style={styles.guideAvatar}>
                    <Text style={styles.guideAvatarText}>👤</Text>
                  </View>
                </View>
              </View>
              {index < guides.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
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

  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchIconText: {
    fontSize: 14,
    color: 'white',
  },
  searchText: {
    flex: 1,
    fontSize: 16,
    color: '#999',
    textAlign: 'right',
    paddingLeft: 200,
  },
  filterIcon: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIconText: {
    fontSize: 16,
    color: 'white',
  },
  mainCardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  mainCard: {
    backgroundColor: '#2E7D32',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  mainCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainCardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  mainCardIconText: {
    fontSize: 30,
  },
  mainCardTextContainer: {
    flex: 1,
  },
  mainCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
  },
  guidesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  guideItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  guideContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  guideLeft: {
    width: 80,
    alignItems: 'flex-start',
  },
  guidePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  guideCenter: {
    flex: 1,
    alignItems: 'center',
  },
  guideName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  guideDescription: {
    fontSize: 12,
    color: '#666',
  },
  guideRight: {
    width: 50,
    alignItems: 'center',
  },
  guideAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideAvatarText: {
    fontSize: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 15,
  },

});
