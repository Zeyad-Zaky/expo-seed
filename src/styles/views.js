import { StyleSheet } from 'react-native';

const Views = StyleSheet.create({
  box: {
    borderRadius: 15,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Views;
