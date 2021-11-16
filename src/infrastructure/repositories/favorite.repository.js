
export const favoriteRepository = {
  getAll: async () => {
    var storedFavorites = localStorage.getItem("favorites");
    const ourArray = await JSON.parse(storedFavorites) || [];
    return ourArray;
  },
  save: (comic) => {
    var storedFavorites = localStorage.getItem("favorites");
    const ourArray = JSON.parse(storedFavorites) || [];
    ourArray.push(comic);
    localStorage.setItem("favorites",JSON.stringify(ourArray));
  },
  deleteById: (comicId) => {
    var storedFavorites = localStorage.getItem("favorites");
    const ourArray = JSON.parse(storedFavorites);
    if(!ourArray ||  ourArray.length === 0) {
     return 
    }
    const comicListFiltered = ourArray.filter(( {id })=> id !== comicId);
    localStorage.setItem("favorites",JSON.stringify(comicListFiltered));
  }
};
