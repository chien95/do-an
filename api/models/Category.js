/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = { 
    attributes: { 
        name: {
            type: 'string'
        },
        slug : {
          type : "string"
        },
        level : {
          type : "number"
        },
        parent : {
          type : "number"
        },
        action:{
          type : "boolean",
          defaultsTo: false,
        },
        image : {
          type : "string"
        }
        
    },
};

