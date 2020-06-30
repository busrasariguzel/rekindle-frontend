export const login = (userInfo) => async (dispatch) => {
    try {
      let success = await Axios.post("/api/users/login", userInfo);
  
      let { jwtToken, jwtRefreshToken } = success.data;
  
      dispatch(setAuthSuccessUser(jwtToken, jwtRefreshToken));
  
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };