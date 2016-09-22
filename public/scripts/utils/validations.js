const constants = {
    errorConstants: {
        invalidNameType: 'Name must be a string',
        invalidPrice: 'Price must be positive',
        invalidNumberType: 'Value must be a number',
        invalidCategoryType: 'Category must be a string',
        invalidStringLength: 'String must not be empty',
        invalidRating: 'Rating must be between 1 and 5',
        invalidDuration: 'Duration must be positive',
        invalidAuthorType: 'Author must be a string',
        invalidPage: 'Page must be positive',
        invalidSummaryType: 'Summary must be a string',
        invalidCover: 'Cover must be Soft or Hard',
        invalidThemeType: 'Theme must be a string',
        invalidPublisherType: 'Publisher must be a string',
        invalidYear: 'Year must be valid' 
    },
    propertiesConstants: {
        minimumPrice: 0,
        invalidStringLength: 0,
        minimumRating: 0,
        maximumRating: 5,
        minimumDuration: 0,
        minimumPage: 0,
        minimumSummary: 0,
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

function validateAuthor(author) {
    if (typeof author !== 'string') {
        throw new Error(constants.errorConstants.invalidAuthorType);
    }

    if (name.length === constants.propertiesConstants.invalidStringLength) {
        throw new Error(constants.errorConstants.invalidStringLength);
    }
}

function validatePage(page) {
    if (page <= constants.propertiesConstants.minimumPage) {
        throw new Error(constants.errorConstants.invalidPage);
    }
}

function validateSummary(summary) {
    if (typeof summary !== 'string') {
        throw new Error(constants.errorConstants.invalidSummaryType);
    }

    if (summary.length === constants.propertiesConstants.minimumSummary) {
        throw new Error(constants.errorConstants.invalidStringLength);
    }
}

function validateCover(cover) {
    if (!(cover === 'Soft' || cover === 'soft' || cover === 'Hard' || cover === 'hard')) {
        throw new Error(constants.errorConstants.invalidCover);
    }
}

function validateTheme(theme) {
    if (typeof theme !== 'string') {
        throw new Error(constants.errorConstants.invalidThemeType);
    }

    if (theme.length === constants.propertiesConstants.invalidStringLength) {
        throw new Error(constants.errorConstants.invalidStringLength);
    }
}

function validatePublisher(publisher) {
    if (typeof publisher !== 'string') {
        throw new Error(constants.errorConstants.invalidPublisherType);
    }

    if (publisher.length === constants.propertiesConstants.invalidStringLength) {
        throw new Error(constants.errorConstants.invalidStringLength);
    }
}

function validateYear(yearOfPremiere) {
    if(typeof yearOfPremiere !== 'number') {
        throw new Error(constants.errorConstants.invalidYear);
    }
}

let validator = {
    validateName,
    validatePrice,
    validateCategory,
    validateRating,
    validateDuration,
    validateAuthor,
    validatePage,
    validateSummary,
    validateCover,
    validateTheme,
    validatePublisher,
    validateYear
};

export { validator };