import { comicRepository } from "../../infrastructure/repositories/comic.repository";

export const comicService = {
    getById: (idComic ) => {
    return comicRepository.getById(idComic);
  },
};