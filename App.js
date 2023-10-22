import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

function handlePress() {
  console.log("TOUCHED");
}
export default function App() {
  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.header1}>Touchable Components Examples</Text>

      <View style={styles.tilesContainer}>

        {/* TouchableWithoutFeedback */}
        <TouchableWithoutFeedback onPress={() => handlePress()}>
          <View style={styles.tile}>
            <Text style={styles.tileHeader}>Without Feedback</Text>
            <Text style={styles.tileText}>press me</Text>
          </View>
        </TouchableWithoutFeedback> 

        {/* TouchableHighlight */}
        <TouchableHighlight onPress={() => handlePress()}>
          <View style={styles.tile}>
            <Text style={styles.tileHeader}>Highlight</Text>
            <Text style={styles.tileText}>press me</Text>
          </View>
        </TouchableHighlight>

        {/* TouchableNativeFeedback */}
        <TouchableNativeFeedback onPress={() => handlePress()}>
          <View style={styles.tile}>
            <Text style={styles.tileHeader}>Native Feedback</Text>
            <Text style={styles.tileText}>press me</Text>
          </View>
        </TouchableNativeFeedback>

      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
   header1: {
    fontSize: 24,
    fontWeight: '600',
    margin: 10,
  },
  container: {
    backgroundColor: '#EDCCD4',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },
  tile: {
    flexBasis: '50%',//200
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
    padding: 10,
  },
  tileHeader: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  tileText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  }
});
