import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppCard = ({ appName, appIcon, lockedStatus }) => {
  const [toggleLock, setToggleLock] = useState(false);
  const handleAppLock = ()=>{
    setToggleLock(!toggleLock);
    console.log(toggleLock);
  }
  return (
    <View style={styles.card}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Image
          source={{ uri: `data:image/png;base64,${appIcon}` }}
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 15,
            fontWeight: '600',
            color: '#535b82',
          }}
        >
          {appName}
        </Text>
      </View>
      <Pressable onPress={handleAppLock}>
        <Icon name="lock" size={35} color={toggleLock?"#113A62":"#BDD5E7"} />
      </Pressable>
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f1f6ff',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '2px 2px 5px #bebebe, -2px -2px 5px #f1f6ff',
    opacity : 1
  },
});
