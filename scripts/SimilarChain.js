/**
 * Created by mishkovladimir on 05-Feb-17.
 */
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

        //chain fulfilled? raise event
        if (isFulfilled) {
            onChainFilledFn(itemChain);
        }


        //todo @vm: можно кстати не через колбек работать а возвращать сразу массив схожих итемов
        //todo @vm: как только они накопятся в нужном количестве
        //todo @vm: а при повторном добавлении уже возвращать только полследний итем если он такой же как другие
        return isFulfilled;
    };


}