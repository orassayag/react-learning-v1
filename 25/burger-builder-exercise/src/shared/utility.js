export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const validateForm = (value, rules) => {
    if (rules.required) {
        if (!value) {
            return false;
        }
    }

    value = value.trim();
    if (rules.minLength) {
        if (value.length <= rules.minLength) {
            return false;
        }
    }

    if (rules.maxLength) {
        if (value.length > rules.maxLength) {
            return false;
        }
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!pattern.test(value)) {
            return false;
        }
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        if (!pattern.test(value)) {
            return false;
        }
    }
    return true;
};