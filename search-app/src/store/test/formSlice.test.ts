import formReducer, { addFormData, showInfoMessage } from '../formSlice';
import { FormFields } from '../../types/type';

const initialState = {
  data: [],
  infoMessage: false,
};
const fakeFormData: FormFields = {
  city: 'London',
  state: 'with friends',
  userName: 'Tonic',
  email: 'test@gmail.com',
  maxPrice: '300',
  pets: false,
  startDate: '01.05.2023',
  file: '',
};

describe('formSlice', () => {
  test('should return initial state when passed an empty action', () => {
    const result = formReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should add new data with addFormData action', () => {
    const action = { type: addFormData.type, payload: fakeFormData };
    const result = formReducer(initialState, action);

    expect(result.data[0].city).toBe('London');
    expect(result.data[0].email).toBe('test@gmail.com');
  });

  test('should display correct boolean with showInfoMessage action', () => {
    const action = { type: showInfoMessage.type, payload: true };
    const result = formReducer(initialState, action);

    expect(result.infoMessage).toBe(true);
  });
});
