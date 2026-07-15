import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const AppTheme = {
  colors: {
    ...DefaultTheme.colors,
    primary: '#EF5068',
  },
};

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: AppTheme.colors.primary,
    marginBottom: 24,
    marginTop: 72,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: AppTheme.colors.border,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 12,
    borderRadius: 10,
  },
  button: {
    backgroundColor: AppTheme.colors.primary,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});