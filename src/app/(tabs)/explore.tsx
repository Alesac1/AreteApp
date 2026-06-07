import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.4642,
          longitude: 9.19,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        <Marker
          coordinate={{ latitude: 45.4642, longitude: 9.19 }}
          title="Milano"
          description="Centro città"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});