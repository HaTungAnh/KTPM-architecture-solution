import { nanoid } from 'nanoid';

function generateShortenId() {
    return nanoid();
}

export {generateShortenId};