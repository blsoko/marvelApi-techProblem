import { favoriteRepository } from "../../infrastructure/repositories/favorite.repository";

export const favoriteService = {
  getAll: () => {
    return favoriteRepository.getAll();
  },
  save: (comic) => {
    favoriteRepository.save(comic);
  },
  deleteById: (comicId) => {
    return favoriteRepository.deleteById(comicId);
  },
};
