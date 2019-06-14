import { StyleSheet } from 'react-native';

const Typography = StyleSheet.create({
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: 18,
  },
  tabLabel: {
    fontFamily: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  title: {
    fontFamily: 'medium',
    fontSize: 18,
  },
  text: {
    fontFamily: 'light',
    fontSize: 16,
    lineHeight: 20,
  },
});

export default Typography;
