import { createSelector} from 'reselect';

const homePageState = (state) => state.homePage;

const makeSelectUsers = createSelector(homePageState, homePage => homePage.users);

export default makeSelectUsers