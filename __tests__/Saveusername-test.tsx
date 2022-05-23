import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {storeUserName} from '../src/modules';
import ActionTypes from '../src/utility/actionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
it('should save user name', () => {
  return store.dispatch(storeUserName('Test')).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual(ActionTypes.STORE_USER_NAME);
  });
});
