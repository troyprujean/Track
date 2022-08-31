import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = dispatch => {
    return ({ email, password }) => {
        // make api request
    };
};

const signin = dispatch => {
    return ({ email, password }) => {
        // make api request
    };
};

const signout = dispatch => {
    return () => {
    };
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
);