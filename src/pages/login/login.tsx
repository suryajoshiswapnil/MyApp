import React from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { ListRenderItemInfo, StyleSheet } from 'react-native';

interface LoginProps {
  pageTitle: string;
}

interface Todo {
  title: string;
  completed: boolean;
  id: string | number;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [todos, loadTodos] = React.useState([]);
  React.useEffect(fetchUsers, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>
        TODO<Text style={styles.titleSub}>s</Text>
      </Text>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item: Todo) => item.id.toString()}
      />
    </View>
  );

  function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        loadTodos(resJson);
      })
      .catch(err => {
        Alert.alert('Got an error', err.message);
      });
  }

  function renderTodo({ item }: ListRenderItemInfo<Todo>) {
    return (
      <View style={styles.todoContainer}>
        <Text style={styles.todoTitle}>{item.title}</Text>
        <Text style={styles.todoCompleted}>
          Completed: {item.completed ? 'Yes' : 'No'}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  titleSub: {
    fontSize: 14,
    fontWeight: 'normal',
  },

  todoContainer: {
    padding: 10,
  },
  todoTitle: {
    fontSize: 18,
  },
  todoCompleted: {
    fontSize: 14,
    color: '#785',
  },
});

export default Login;
