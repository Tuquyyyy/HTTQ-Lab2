/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  displayContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  displayText: {
    fontSize: 56,
    fontWeight: '400',
    color: '#1A1A1A',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  button: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorButton: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FBE6CE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroButton: {
    flex: 1,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  plusButton: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FBE6CE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  equalButton: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#F5921E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 26,
    fontWeight: '400',
    color: '#1A1A1A',
  },
  operatorText: {
    fontSize: 26,
    fontWeight: '400',
    color: '#F5921E',
  },
  equalText: {
    fontSize: 26,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  clearButton: {
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  clearText: {
    fontSize: 18,
    color: '#1A1A1A',
  },
});