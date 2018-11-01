export const mapToItem = (data) => {
  return Object.keys(data).reduce((acc, key) => {
    return [
      ...acc,
      {
        id: key,
        name: data.name,
        isComplete: data.isComplete
      }
    ];
  }, []);
};
