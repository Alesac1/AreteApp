import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ['New', 'Popular', 'Gym', 'Outdoor'];

const classesData = [
  {
    title: 'Boulder Basics',
    tag: 'V2-V4',
    progress: '12 / 25 problems',
    color: '#8b5cf6',
  },
  {
    title: 'Technique Lab',
    tag: 'Footwork',
    progress: '7 / 18 drills',
    color: '#65a30d',
  },
  {
    title: 'Power Session',
    tag: 'Overhang',
    progress: '4 / 12 sets',
    color: '#ea580c',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable style={styles.iconButton}>
            <Ionicons name="search-outline" size={22} color="#fff" />
          </Pressable>

          <Text style={styles.logo}>ARETE</Text>

          <Pressable style={styles.avatarButton}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
              style={styles.avatar}
            />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}
        >
          {categories.map((item, index) => (
            <Pressable
              key={item}
              style={[
                styles.chip,
                index === 1 && styles.chipActive,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  index === 1 && styles.chipTextActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heroRow}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop',
            }}
            imageStyle={styles.heroImage}
            style={[styles.heroCard, styles.heroLarge]}
          >
            <View style={styles.overlayDark} />
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Blocchi del giorno</Text>

              <View style={styles.heroActions}>
                <Pressable style={styles.watchButton}>
                  <Text style={styles.watchButtonText}>Explore</Text>
                </Pressable>

                <Pressable style={styles.bookmarkButton}>
                  <Ionicons name="bookmark-outline" size={20} color="#fff" />
                </Pressable>
              </View>
            </View>
          </ImageBackground>

          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=900&auto=format&fit=crop',
            }}
            imageStyle={styles.heroImage}
            style={[styles.heroCard, styles.heroSmall]}
          >
            <View style={styles.overlayLight} />
            <View style={styles.heroContent}>
              <Text style={styles.heroTitleSmall}>Indoor guides</Text>

              <Pressable style={styles.watchButtonSmall}>
                <Text style={styles.watchButtonText}>Open</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your sessions</Text>
          <Pressable>
            <Text style={styles.sectionLink}>View all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsRow}
        >
          {classesData.map((item) => (
            <View key={item.title} style={styles.infoCard}>
              <Text style={styles.infoCardTitle}>{item.title}</Text>

              <View style={[styles.tag, { backgroundColor: item.color }]}>
                <Text style={styles.tagText}>{item.tag}</Text>
              </View>

              <Text style={styles.progressText}>{item.progress}</Text>

              <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
              </View>
            </View>
          ))}
        </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  iconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    overflow: 'hidden',
    backgroundColor: '#555',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  chipsRow: {
    gap: 10,
    paddingBottom: 22,
  },
  chip: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: '#4a4a4a',
  },
  chipActive: {
    backgroundColor: '#fff',
  },
  chipText: {
    color: '#f1f1f1',
    fontSize: 15,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#111',
  },
  heroRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 26,
  },
  heroCard: {
    borderRadius: 28,
    overflow: 'hidden',
    justifyContent: 'space-between',
    padding: 16,
  },
  heroLarge: {
    flex: 1.45,
    minHeight: 300,
  },
  heroSmall: {
    flex: 0.95,
    minHeight: 300,
  },
  heroImage: {
    borderRadius: 28,
  },
  overlayDark: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  overlayLight: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 36,
    maxWidth: 160,
  },
  heroTitleSmall: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    maxWidth: 100,
  },
  heroActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  watchButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 999,
  },
  watchButtonSmall: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  watchButtonText: {
    color: '#111',
    fontSize: 15,
    fontWeight: '700',
  },
  bookmarkButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 29,
    fontWeight: '700',
  },
  sectionLink: {
    color: '#e8e8e8',
    fontSize: 16,
    fontWeight: '500',
  },
  cardsRow: {
    gap: 14,
    paddingRight: 10,
  },
  infoCard: {
    width: 170,
    backgroundColor: '#414141',
    borderRadius: 24,
    padding: 18,
  },
  infoCardTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  tag: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 24,
  },
  tagText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  progressText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  progressTrack: {
    width: '100%',
    height: 6,
    borderRadius: 999,
    backgroundColor: '#8b8b8b',
    overflow: 'hidden',
  },
  progressFill: {
    width: '55%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#fff',
  },
});