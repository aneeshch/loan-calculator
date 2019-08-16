/* helper functions */

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const reduceObject = object => ({
    amount: object.principal.amount,
    month: object.numPayments,
});

const uniqueArray = data => data.filter((object,index) => index === data.findIndex(obj => JSON.stringify(obj) === JSON.stringify(object)));

export {
    updateObject,
    reduceObject,
    uniqueArray,
};