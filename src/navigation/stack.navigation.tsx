import {createStackNavigator} from '@react-navigation/stack';
import {StackParams} from '../utils/types';
import {CounterView} from '../views/counter.view';
import {ResultView} from '../views/result.view';

const Stack = createStackNavigator();

export const TodoListStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackParams.Counter} component={CounterView} />
      <Stack.Screen name={StackParams.Result} component={ResultView} />
    </Stack.Navigator>
  );
};
