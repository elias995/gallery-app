import {PICTURE_DESCRIPTIONS, COMMENT_MESSAGES, USER_NAMES} from './const.js';
import {getRandomInt, getRandomArrayElement} from './util.js';

const generateUser = () => {
    return {
        id: getRandomInt(1, 25),
        name: getRandomArrayElement(USER_NAMES),
        avatarPath: `./avatars/${getRandomInt(1, 6)}.svg`
    };
};

const MAX_COMMENT_COUNT = 10;
const usedCommentIds = [];
const usedPictureIds = [];

const generateComment = (maxCommentId) => {
    let commentId = getRandomInt(1, maxCommentId);
    while (usedCommentIds.includes(commentId)) {
        commentId = getRandomInt (1, maxCommentId);
    }
    usedCommentIds.push(commentId);

    return {
        id: commentId,
        message: getRandomArrayElement(COMMENT_MESSAGES),
        user: generateUser()
    };
};

const generatePicture = (maxPictureId) => {
    let pictureId = getRandomInt(1, maxPictureId);
    while (usedPictureIds.includes(pictureId)) {
        pictureId = getRandomInt(1, maxPictureId);
    }
    usedPictureIds.push(pictureId);

    const comments = [];
    for (let i = 0; i < getRandomInt(0, MAX_COMMENT_COUNT); i++) {
        const comment = generateComment(maxPictureId * MAX_COMMENT_COUNT);
        comments.push(comment);
    }

    return {
        id: pictureId,
        url: `./photos/${getRandomInt(1, 25)}.jpg`,
        description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
        likes: getRandomInt(0, 200),
        comments: comments
    };
};

const generatePictures = (count) => {
    const pictures = [];

    for (let i = 0; i < count; i++) {
        const picture = generatePicture(count);
        pictures.push(picture);
    }

    return pictures;
};

export {
    generatePictures
};
