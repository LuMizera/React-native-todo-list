import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../pages/Home/Home';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleCreateModal } from '../store/ducks/todo/actions';

const ButtonCreate = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleCreateModal());
  };

  return (
    <View>
      <Button onPress={toggleModal} title="Add TODO +" color="#0a0" />
    </View>
  );
};

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerRight: <ButtonCreate />,
      headerRightContainerStyle: {
        marginRight: 10
      },
      headerTitle: 'TODO LIST'
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
