export const favoriteRepository = {
  getAll: async () => {
    var storedFavorites = localStorage.getItem("favorites");
    const favoritesParsed = (await JSON.parse(storedFavorites)) || [];
    return favoritesParsed;
  },
  save: async (comic, fnCallback) => {
    var storedFavorites = localStorage.getItem("favorites");
    const parsedArray = JSON.parse(storedFavorites) || [];
    const comicFound = parsedArray.find(
      (comicStored) => comicStored.id === comic.id
    );
    if (comicFound) return
    parsedArray.push(comic);
    localStorage.setItem("favorites", JSON.stringify(parsedArray));
    fnCallback("Success");
  },
  deleteById: (comicId) => {
    var storedFavorites = localStorage.getItem("favorites");
    const favoritesParsed = JSON.parse(storedFavorites);
    if (!favoritesParsed || favoritesParsed.length === 0) {
      return;
    }
    const comicListFiltered = favoritesParsed.filter(
      ({ id }) => id !== comicId
    );
    localStorage.setItem("favorites", JSON.stringify(comicListFiltered));
  },
};
