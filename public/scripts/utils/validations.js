const constants = {
    errorConstants: {
        invalidNameType: 'Name must be a string',
        invalidPrice: 'Price must be positive',
        invalidNumberType: 'Value must be a number',
        invalidCategoryType: 'Category must be a string',
        invalidStringLength: 'String must not be empty',
        invalidRating: 'Rating must be between 1 and 5',
        invalidDuration: 'Duration must be positive'
    },
    propertiesConstants: {
        minimumPrice: 0,
        invalidStringLength: 0,
        minimumRating: 0,
        maximumRating: 5,
        minimumDuration: 0
    }
};

function validateName(name) {
    if (typeof name !== 'string') {
        throw new Error(constants.errorConstants.invalidNameType);
    }

    if (name.length === constants.propertiesConstants.invalidStringLength) {
        throw new Error(constants.errorConstants.invalidStringLength);
    }
}

function validatePrice(price) {
    if (typeof price !== 'number') {
        throw new Error(constants.errorConstants.invalidNumberType);
    }

    if (price < constants.propertiesConstants.minimumPrice) {
        throw new Error(constants.errorConstants.invalidPrice);
    }
}

function validateCategory(category) {
    if (typeof category !== 'string') {
        throw new Error(constants.errorConstants.invalidCategoryType);
    }

    if (category.length === constants.propertiesConstants.invalidStringLength) {
        throw new Error(constants.errorConstants.invalidStringLength);
    }
}

function validateRating(rating) {
    if (typeof rating !== 'number') {
        throw new Error(constants.errorConstants.invalidNumberType);
    }

    if (rating < constants.propertiesConstants.minimumPrice ||
        constants.propertiesConstants.maximumRating) {
        throw new Error(constants.errorConstants.invalidRating);
    }
}

function validateDuration(duration) {
    if (duration <= constants.propertiesConstants.minimumDuration) {
        throw new Error(constants.errorConstants.invalidDuration);
    }
}

let validator = {
    validateName,
    validatePrice,
    validateCategory,
    validateRating,
    validateDuration
};

export { validator };