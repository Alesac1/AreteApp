import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gyms = [
  { name: 'Rockit', city: 'Milano', tag: 'Indoor', color: '#ef4444' },
  { name: 'Colle Salario', city: 'Roma', tag: 'Boulder Gym', color: '#3b82f6' },
  { name: 'Monkey Island', city: 'Roma', tag: 'Training', color: '#22c55e' },
];

export default function GymsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color="#fff" />
          </Pressable>

          <Text style={styles.title}>Gyms</Text>

          <View style={styles.fakeSpacer} />
        </View>

        <Text style={styles.subtitle}>Choose a climbing gym</Text>

        <View style={styles.grid}>
          {gyms.map((gym) => (
            <Pressable key={gym.name} style={styles.card}>
              <View style={[styles.badge, { backgroundColor: gym.color }]}>
                <Text style={styles.badgeText}>{gym.tag}</Text>
              </View>

              <Text style={styles.cardTitle}>{gym.name}</Text>
              <Text style={styles.cardCity}>{gym.city}</Text>

              <View style={styles.cardFooter}>
                <Text style={styles.cardAction}>Open gym</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  content: {
    padding: 20,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fakeSpacer: {
    width: 42,
    height: 42,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: '#cfcfcf',
    fontSize: 15,
    marginBottom: 22,
  },
  grid: {
    gap: 14,
  },
  card: {
    backgroundColor: '#3c3c3c',
    borderRadius: 26,
    padding: 18,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardCity: {
    color: '#d1d1d1',
    fontSize: 15,
    marginBottom: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardAction: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});