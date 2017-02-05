"use strict";

function SimilarChain(chainLength, comparatorFn, onChainFilledFn) {
    let lastItem = null;
    let itemChain = [];

    this.push = function (item) {
        if (!comparatorFn(lastItem, item)) {
            itemChain = [];
        }

        itemChain.push(item);
        lastItem = item;

        let isFulfilled = itemChain.length >= chainLength;

        if (isFulfilled) {
            onChainFilledFn(itemChain);
        }

        return isFulfilled;
    };
}