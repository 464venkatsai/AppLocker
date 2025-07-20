import { NativeModules } from 'react-native';
const { InstalledApps } = NativeModules;


export const getInstalledApps = async () => {
  console.log('Fetching the apps present in device...');
  const apps = await InstalledApps.getInstalledApps();
  console.log('Fetched all the apps and started parsing...');
  const parsedApps = (Array.isArray(apps) ? apps : JSON.parse(JSON.stringify(apps)))
    .map((app, index) => ({
      ...app,
      id: index,
    }));
  console.log('InstalledApps :', parsedApps);
  return parsedApps
};
