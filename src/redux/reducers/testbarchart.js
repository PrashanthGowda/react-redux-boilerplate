import { REPLICATE_CHART, LOAD_CHART } from '../actionTypes';

const initialState = {
  orangeData: []
};

const testbarchart = (state = initialState, action) => {
  switch (action.type) {
    case REPLICATE_CHART: {
      return action.payload.orangeData;
    }
    case LOAD_CHART: {
      return { ...state, orangeData: [2, 5, 12, 22, 4] };
    }
    default: {
      return state;
    }
  }
};

export default testbarchart;
