import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getInstalledApps } from '../services/AppServices';
import AppCard from '../components/AppCard';

const Home = () => {
  const [userApps, setUserApps] = useState([]);
  useEffect(() => {
    const loadApps = async () => {
      const parsedApps = await getInstalledApps();
      setUserApps(parsedApps);
      console.log("userApps",userApps);
    };
    loadApps();
  }, []);

  const renderItem = ({item}) => {
    console.log("appItem",item)
    return (
      <AppCard
        appName={item.appName}
        appIcon={item.icon}
        lockedStatus={true}
      />
    );
  };

  return (
    <View style={styles.body}>
      <Text style={styles.appTitle}>App Locker</Text>
      <FlatList
        style={styles.appsList}
        data={userApps}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Text>{userApps.length}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 50,
    paddingLeft : 5,
    paddingRight : 5,
    marginLeft : 2,
    backgroundColor: "#F5FBFF",
  },
  appTitle : {
    fontSize : 30,
    fontWeight : "800",
    fontFamily : "ui-rounded",
    marginLeft : 20,
    marginBottom : 20,
  },
  appsList : {
    boxShadow : "inset 1px 1px 7px #bebebe, inset -7px -7px 7px #F5FBFF",
    backgroundColor: "#E5F3FD",
    width : "99%",
    borderRadius : 10,
    padding : 5,
    paddingTop: 10,
  }
});
