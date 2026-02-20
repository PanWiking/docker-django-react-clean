const register = async (username, password) => {
    await api.post("register/", { username, password });
};