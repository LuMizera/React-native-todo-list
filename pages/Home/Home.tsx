import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import ItemList from './components/ItemList';
import CreateModal from './components/NewItemModal';
import { useSelector } from 'react-redux';
import { ApplicationState, Todo } from '../../models';

const Home = () => {
  const { todos: list } = useSelector((props: ApplicationState) => props.todo);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo List</Text>
      </View>
      <ScrollView style={styles.listContainer}>
        <View style={styles.headerTableContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: 'bold' }}>Activity</Text>
          </View>
          <View style={styles.isDoneContainer}>
            <Text style={{ fontWeight: 'bold' }}>Is Done?</Text>
          </View>
          <View style={styles.deleteContainer}>
            <Text style={{ fontWeight: 'bold' }}>Delete</Text>
          </View>
        </View>
        {list.map((item: Todo, index: number) => (
          <ItemList item={item} key={item.id.toString()} index={index} />
        ))}
      </ScrollView>
      <CreateModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContainer: {
    margin: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  },
  listContainer: {
    margin: 10
  },
  headerTableContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingLeft: 5
  },
  descriptionContainer: {
    width: '60%'
  },
  isDoneContainer: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
