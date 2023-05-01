import searchReducer, {
  addValue,
  addSearchQuery,
  addServerData,
  isShowModal,
  getModalData,
} from '../searchSlice';

const initialState = {
  value: '',
  query: '',
  data: [],
  isModal: false,
  modalData: {
    id: '',
    idFirstEpisode: '',
    idLastEpisode: '',
  },
};

const fakeServerData = [
  {
    id: 2,
    name: 'Aloha',
    status: 'Alive',
    species: 'human',
    type: 'human',
    gender: 'male',
    origin: {
      name: 'Earth',
      url: 'http://earth.com/aloha',
    },
    location: {
      name: 'Earth',
      url: 'http://earth.com/aloha',
    },
    image: './cake.png',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'http://earth.com/aloha',
    created: '02.03.2003',
  },
];

const fakeModalData = {
  id: '2',
  idFirstEpisode: '3',
  idLastEpisode: '4',
};

describe('formSlice', () => {
  test('should return initial state when passed an empty action', () => {
    const result = searchReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should add new value with addValue action', () => {
    const action = { type: addValue.type, payload: 'hello' };
    const result = searchReducer(initialState, action);

    expect(result.value).toBe('hello');
  });

  test('should add new query with addSearchQuery action', () => {
    const action = { type: addSearchQuery.type, payload: 'hello' };
    const result = searchReducer(initialState, action);

    expect(result.query).toBe('hello');
  });

  test('should add new data with addServerData action', () => {
    const action = { type: addServerData.type, payload: fakeServerData };
    const result = searchReducer(initialState, action);

    expect(result.data[0].name).toBe('Aloha');
  });

  test('should display correct boolean with isShowModal action', () => {
    const action = { type: isShowModal.type, payload: true };
    const result = searchReducer(initialState, action);

    expect(result.isModal).toBe(true);
  });

  test('should add new data with getModalData action', () => {
    const action = { type: getModalData.type, payload: fakeModalData };
    const result = searchReducer(initialState, action);

    expect(result.modalData.id).toBe('2');
  });
});
