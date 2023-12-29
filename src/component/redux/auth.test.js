const initialState = {
    loading: false,
    users:["testing@gmail.com"],
    isLoggedIn: false,
    error: "Invalid email or password",
  };
  
  describe('initialState', () => {

    // The initial state should have a 'loading' property set to false.
    it('should have loading property set to false', () => {
      const state = initialState;
      expect(state.loading).toBe(false);
    });

    // The initial state should have an 'isLoggedIn' property set to false.
    it('should have isLoggedIn property set to false', () => {
      const state = initialState;
      expect(state.isLoggedIn).toBe(false);
    });

    // None of the properties in the initial state should be undefined.
    it('should not have any undefined properties', () => {
      const state = initialState;
      expect(Object.values(state)).not.toContain(undefined);
    });

    // None of the properties in the initial state should be null.
    it('should not have any null properties', () => {
      const state = initialState;
      expect(Object.values(state)).not.toContain(null);
    });

    // The 'loading' property in the initial state should be able to be set to true.
    it('should be able to set loading property to true', () => {
      const state = initialState;
      state.loading = true;
      expect(state.loading).toBe(true);
    });
});
