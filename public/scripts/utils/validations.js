const constants = {
    errorConstants: {
        invalidNameType: 'Name must be a string',
        invalidPrice: 'Price must be positive',
        invalidPriceType: 'Price must be a number',
        invalidCategoryType: 'Category must be a string',
        invalidStringLength: 'String must not be empty'
    },
    propertiesConstants: {
        minimumPrice: 0,
        invalidStringLength: 0
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
        throw new Error(constants.errorConstants.invalidPriceType);
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

let validator = {
    validateName,
    validatePrice,
    validateCategory
};

export { validator };