import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BookOpen, Users, Award, PenTool, Star } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeInDown, FadeInUp, SlideInLeft, SlideInRight } from 'react-native-reanimated';
import { AppLogo } from '@/components/AppLogo';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#0F172A', '#1E293B', '#334155']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Konten scrollable biar aman kalau height kecil */}
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 40, paddingBottom: insets.bottom + 40 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Animated.View entering={FadeInUp.delay(300)} style={styles.header}>
          <AppLogo size="large" animated={true} />
          <Text style={styles.subtitle}>
            Platform Pembelajaran Quran Digital untuk Hafalan dan Murojaah
          </Text>
        </Animated.View>

        {/* Fitur */}
        <View style={styles.features}>
          <Animated.View entering={SlideInLeft.delay(500)} style={styles.feature}>
            <PenTool size={24} color="white" />
            <Text style={styles.featureText}>Setoran Hafalan & Murojaah</Text>
          </Animated.View>
          <Animated.View entering={SlideInRight.delay(600)} style={styles.feature}>
            <Award size={24} color="white" />
            <Text style={styles.featureText}>Penilaian & Label Pencapaian</Text>
          </Animated.View>
          <Animated.View entering={SlideInLeft.delay(700)} style={styles.feature}>
            <Users size={24} color="white" />
            <Text style={styles.featureText}>Monitoring Orang Tua</Text>
          </Animated.View>
          <Animated.View entering={SlideInRight.delay(800)} style={styles.feature}>
            <BookOpen size={24} color="white" />
            <Text style={styles.featureText}>Baca Quran Digital</Text>
          </Animated.View>
        </View>

        {/* Tombol */}
        <Animated.View entering={FadeInDown.delay(900)} style={styles.buttons}>
          <Pressable
            style={[styles.button, styles.primaryButton]}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.primaryButtonText}>Masuk</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.secondaryButton]}
            onPress={() => router.push('/(auth)/register')}
          >
            <Text style={styles.secondaryButtonText}>Daftar</Text>
          </Pressable>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    paddingHorizontal: Math.max(24, width * 0.05),
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  subtitle: {
    fontSize: Math.min(16, width * 0.04),
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: Math.min(24, width * 0.06),
    paddingHorizontal: 20,
    fontWeight: '500',
    marginTop: 16,
  },
  features: {
    gap: Math.max(16, height * 0.02),
    marginVertical: height * 0.04,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: Math.max(16, width * 0.042),
    borderRadius: 16,
  },
  featureText: {
    color: 'white',
    fontSize: Math.min(16, width * 0.04),
    fontWeight: '600',
    flex: 1,
  },
  buttons: {
    gap: Math.max(16, height * 0.02),
  },
  button: {
    padding: Math.max(16, width * 0.04),
    borderRadius: 16,
    alignItems: 'center',
    minHeight: 56,
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: 'white',
  },
  primaryButtonText: {
    color: '#10B981',
    fontSize: Math.min(18, width * 0.045),
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.1)', // tambahin kontras
    borderWidth: 2,
    borderColor: 'white',
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: Math.min(18, width * 0.045),
    fontWeight: 'bold',
  },
});
