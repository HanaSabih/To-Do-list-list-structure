const getStorage = () => {
  const storage =
    localStorage.getItem("ToDo") === null
      ? []
      : JSON.parse(localStorage.getItem("ToDo"));
  return storage;
};

export default getStorage;
