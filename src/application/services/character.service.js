import { characterRepository } from "../../infrastructure/repositories/character.repository";

export const characterService = {
  getAllByOffsetAndLimit: (offset = 0, limit = 10) => {
    return characterRepository.getAllByOffsetAndLimit(offset, limit);
  },
};