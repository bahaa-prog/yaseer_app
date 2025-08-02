import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Modal,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import BottomNavigation from '../components/BottomNavigation';

const { width, height } = Dimensions.get('window');

const initialPosts = [
  {
    id: 1,
    author: 'عبدالله محمد',
    time: 'قبل ساعة',
    question: 'أبي احسن مكان مأكولات بحرية',
    replies: 2,
    repliesList: [
      {
        id: 1,
        content: 'مطعم النورس',
        author: '👤'
      },
      {
        id: 2,
        content: 'Fish in',
        author: '👤'
      }
    ]
  },
  {
    id: 2,
    author: 'فهد سليمان',
    time: 'قبل ٤ س',
    question: 'المكان هذا وين؟',
    replies: 9,
    hasImage: true
  }
];

export default function AskPeopleScreen() {
  const [posts, setPosts] = useState(initialPosts);
  const [showAskForm, setShowAskForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  const handleAskQuestion = () => {
    if (newQuestion.trim() === '') {
      Alert.alert('خطأ', 'يرجى كتابة سؤال');
      return;
    }

    const newPost = {
      id: posts.length + 1,
      author: 'بهاء السليمان',
      time: 'الآن',
      question: newQuestion.trim(),
      replies: 0,
      repliesList: []
    };

    setPosts([newPost, ...posts]);
    setFilteredPosts([newPost, ...filteredPosts]);
    setNewQuestion('');
    setShowAskForm(false);
    Alert.alert('نجح', 'تم إرسال سؤالك بنجاح!');
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => 
        post.question.toLowerCase().includes(text.toLowerCase()) ||
        post.author.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
              <Text style={styles.searchIconText}>🔍</Text>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="بحث في الأسئلة..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={handleSearch}
              textAlign="right"
            />
          </View>
        </View>

        {/* Posts Container */}
        <View style={styles.postsContainer}>
          {filteredPosts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              {/* Post Header */}
              <View style={styles.postHeader}>
                <Text style={styles.postAuthor}>{post.author}</Text>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>

              {/* Post Content */}
              <View style={styles.postContent}>
                {post.hasImage && (
                  <View style={styles.postImage}>
                    <Text style={styles.imagePlaceholder}>🏞️</Text>
                  </View>
                )}
                <Text style={styles.postQuestion}>{post.question}</Text>
              </View>

              {/* Post Footer */}
              <View style={styles.postFooter}>
                <View style={styles.repliesCount}>
                  <Text style={styles.repliesIcon}>💬</Text>
                  <Text style={styles.repliesText}>{post.replies}</Text>
                </View>
              </View>

              {/* Replies */}
              {post.repliesList && (
                <View style={styles.repliesContainer}>
                  {post.repliesList.map((reply, index) => (
                    <View key={reply.id} style={styles.replyCard}>
                      <View style={styles.replyContent}>
                        {index === 1 && (
                          <View style={styles.replyIcon}>
                            <Text style={styles.replyIconText}>↻</Text>
                          </View>
                        )}
                        <Text style={styles.replyText}>{reply.content}</Text>
                        <View style={styles.replyAvatar}>
                          <Text style={styles.replyAvatarText}>{reply.author}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => setShowAskForm(true)}
      >
        <Image 
          source={require('../assets/icons/question_icon.png')}
          style={styles.fabIcon}
        />
      </TouchableOpacity>

      {/* Ask Question Modal */}
      <Modal
        visible={showAskForm}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowAskForm(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>اسأل أهل عسير!</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setShowAskForm(false)}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <TextInput
              style={styles.questionInput}
              placeholder="اكتب سؤالك هنا..."
              placeholderTextColor="#999"
              value={newQuestion}
              onChangeText={setNewQuestion}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setShowAskForm(false)}
              >
                <Text style={styles.cancelButtonText}>إلغاء</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleAskQuestion}
              >
                <Text style={styles.submitButtonText}>إرسال</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
    //backgroundColor: '#4CAF50',
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
  /*filterIcon: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  }*/
  filterIconText: {
    fontSize: 16,
    color: 'white',
  },
  postsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  postAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postTime: {
    fontSize: 14,
    color: '#999',
  },
  postContent: {
    marginBottom: 15,
  },
  postImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePlaceholder: {
    fontSize: 40,
  },
  postQuestion: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  repliesCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  repliesIcon: {
    fontSize: 16,
    color: '#4CAF50',
  },
  repliesText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  repliesContainer: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  replyCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    marginLeft: 20,
  },
  replyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyIcon: {
    marginRight: 10,
  },
  replyIconText: {
    fontSize: 16,
    color: '#4CAF50',
  },
  replyText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  replyAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  replyAvatarText: {
    fontSize: 16,
    color: 'white',
  },
  fab: {
    position: 'absolute',
    bottom: 140,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
    width: 24,
    height: 24,
    tintColor: '#4CAF50',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#666',
  },
  questionInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#333',
    minHeight: 100,
    textAlign: 'right',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },

});
