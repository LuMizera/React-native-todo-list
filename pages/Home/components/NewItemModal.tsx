import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableHighlight, TextInput, CheckBox, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../../models';
import { toggleCreateModal, addTodo } from '../../../store/ducks/todo/actions';

const CreateModal = () => {
  const {
    modals: { isCreateOpen }
  } = useSelector((props: ApplicationState) => props.todo);

  const [newTodo, setNewTodo] = useState({ isDone: false, activity: '' });

  const dispatch = useDispatch();

  const handleCheckboxChange = (value: boolean) => {
    setNewTodo({ ...newTodo, isDone: value });
  };

  const handleTextChange = (value: string) => {
    setNewTodo({ ...newTodo, activity: value });
  };

  const handleSubmit = () => {
    dispatch(addTodo({ ...newTodo, id: Date.now() }));
    dispatch(toggleCreateModal());
  };

  return (
    <Modal visible={isCreateOpen} animated={true} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => dispatch(toggleCreateModal())} style={styles.background}>
          <View></View>
        </TouchableHighlight>
        <View style={styles.modal}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create new Todo</Text>
          </View>
          <View style={styles.infosContainer}>
            <Text>Activity: </Text>
            <TextInput style={styles.textInput} onChangeText={handleTextChange} />
          </View>
          <View style={styles.infosContainer}>
            <Text>Is Done?</Text>
            <CheckBox onValueChange={handleCheckboxChange} />
          </View>
          <View>
            <Button title="Save TODO" onPress={handleSubmit} disabled={newTodo.activity === "" ? true: false}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.7,
    zIndex: 10,
    backgroundColor: '#000'
  },
  modal: {
    backgroundColor: '#fff',
    zIndex: 16,
    margin: 20,
    padding: 20,
    borderRadius: 25
  },
  titleContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  textInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  infosContainer: {
    width: '100%',
    marginBottom: 10
  }
});

export default CreateModal;
