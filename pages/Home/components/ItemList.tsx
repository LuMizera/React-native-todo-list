import React from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';
import { Todo } from '../../../models/Todo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { editTodo, deleteTodo } from '../../../store/ducks/todo/actions';

interface OwnProps {
  item: Todo;
  index: any;
}

const ItemList: React.FC<OwnProps> = ({ item, index }: OwnProps) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(editTodo({ ...item, isDone: !item.isDone }));
  };

  const handleDeleteItem = () => {
    dispatch(deleteTodo(item.id));
  };

  return (
    <View style={[styles.container, index % 2 === 0 ? styles.isEvenNumber : null]}>
      <View style={styles.descriptionContainer}>
        <Text>{item.activity}</Text>
      </View>
      <View style={styles.isDoneContainer}>
        <CheckBox value={item.isDone} onChange={handleCheckboxChange} />
      </View>
      <View style={styles.deleteContainer}>
        <Icon.Button name="trash" color={'red'} backgroundColor={'transparent'} onPress={handleDeleteItem}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingLeft: 5
  },
  isEvenNumber: {
    backgroundColor: '#eee'
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

export default ItemList;
