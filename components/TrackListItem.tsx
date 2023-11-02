import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Track } from '../assets/types'
import { usePlayerContext } from '../providers/PlayerProvider';


type TrackListItemProps = {
  track: Track;
};

const TrackListItem = ({ track }: TrackListItemProps) => {
    const image = track.album?.images?.[0];
    const { setTrack } = usePlayerContext();
    return (
      <Pressable
        onPress={() => setTrack(track)}
        style={styles.container}
      >
        {image && <Image source={{ uri: image.url }} style={styles.image} />}
        <View>
          <Text style={styles.title}>{track.name}</Text>
          <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
        </View>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 10,
      gap: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontWeight: '500',
      color: 'white',
      fontSize: 16,
    },
    subtitle: {
      color: 'gray',
    },
    image: {
      width: 50,
      aspectRatio: 1,
      marginRight: 10,
      borderRadius: 5,
    },
  });
  
  export default TrackListItem;