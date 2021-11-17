import { characterRepository } from "../../infrastructure/repositories/character.repository";

export const characterService = {
  getAllByOffsetAndLimit: (input, offset = 0, sortby, limit = 10) => {
    return characterRepository.getAllByOffsetAndLimit(input, offset, sortby, limit);
  },
};