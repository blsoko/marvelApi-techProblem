import { http } from "../http";

export const characterRepository = {
  getAllByOffsetAndLimit: async (input, offset, sortby, limit) => {
    const inputParam = input && `&nameStartsWith=${input}`
    return await http
      .get(
        `characters?orderBy=${sortby}&offset=${offset}&limit=${limit}&ts=1&apikey=4106c0bc8ac32d760c0c19187fc3859f&hash=9213914806e06a03a00b83e86dc052ab${inputParam}`
      )
      .then((charactersDTO) => {
        return {
          count: charactersDTO.data.count,
          limit: charactersDTO.data.limit,
          offset: charactersDTO.data.offset,
          total: charactersDTO.data.total / limit,
          results: charactersDTO.data.results,
        };
      });
  },
};
