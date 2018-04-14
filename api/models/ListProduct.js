/**
 * ListProduct.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    categoryID:{
      model : 'category',
    },
    name: {
      type: 'string'
    },
    slug: {
      type: "string"
    },
    content : {
      type : "string"
    },
    detail : {
      type : "string"
    },
    priceMarket : {
      type : "number"
    },
    priceStore : {
      type : "number"
    },
    productID : {
      type : "string"
    },
    trade : {
      type : "string"
    },
    sale : {
      type : "number"
    },
    percent : {
      type : "number"
    }
  }
};

