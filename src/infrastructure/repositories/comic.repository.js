import { http } from "../http";

export const comicRepository = {
  getById: async (idComic) => {
    return await http
      .get(
        `comics/${idComic}?ts=1&apikey=4106c0bc8ac32d760c0c19187fc3859f&hash=9213914806e06a03a00b83e86dc052ab`
      )
      .then((comicDTO) => {
        return comicDTO.data?.results[0]
      });
  },
};
