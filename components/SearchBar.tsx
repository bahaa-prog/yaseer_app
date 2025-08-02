import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  showFilterIcon?: boolean;
  onFilterPress?: () => void;
  showSearchIcon?: boolean;
}

export default function SearchBar({ 
  placeholder = "بحث",
  value = "",
  onChangeText,
  showFilterIcon = false,
  onFilterPress,
  showSearchIcon = true
}: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        {showSearchIcon && (
          <View style={styles.searchIcon}>
            <Text style={styles.searchIconText}>🔍</Text>
          </View>
        )}
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          textAlign="right"
        />
        {showFilterIcon && (
          <TouchableOpacity style={styles.filterIcon} onPress={onFilterPress}>
            <Text style={styles.filterIconText}>⊞</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchIconText: {
    fontSize: 14,
    color: 'white',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
  },
  filterIcon: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIconText: {
    fontSize: 16,
    color: 'white',
  },
}); 