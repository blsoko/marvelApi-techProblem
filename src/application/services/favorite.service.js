import { favoriteRepository } from "../../infrastructure/repositories/favorite.repository";

export const favoriteService = {
  getAll: () => {
    return favoriteRepository.getAll();
  },
  save: (comic, fnCallback) => {
    favoriteRepository.save(comic, fnCallback);
  },
  deleteById: (comicId) => {
    return favoriteRepository.deleteById(comicId);
  },
};
