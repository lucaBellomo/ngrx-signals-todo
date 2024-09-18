import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    addTodo(text: string) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      patchState(store, (state) => ({ todos: [...state.todos, newTodo] }));
    },
    removeTodo(id: number) {
      patchState(store, (state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    },
    toggleCompleted(id: number) {
      patchState(store, (state) => ({
        todos: state.todos.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item,
        ),
      }));
    },
  })),
);
