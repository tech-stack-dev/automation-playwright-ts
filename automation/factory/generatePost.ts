import Chance from "chance";
import { PostDto } from "../dto/PostDto";
import { getValue } from "../utils/helper/getValue";

const chance = new Chance();

export function generatePost(dto?: Partial<PostDto>): PostDto {
    return {
        title: getValue(dto?.title, chance.word({ length: 8 })),
        body: getValue(dto?.body, chance.sentence({ words: 5 })),
        userId: getValue(dto?.userId, chance.integer({ min: 1, max: 100 })),
    }
}