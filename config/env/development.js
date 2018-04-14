/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */
let path = require('path')
module.exports = {

    /***************************************************************************
     * Set the default database connection for models in the development       *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/

    // models: {
    //   connection: 'someMongodbServer'
    // }
    //TOKEN TIME IN MINUTES
    INITIALIZE: false,
    TOKEN_TIME: 5000,
    BPMN_FOLDER: path.join(__dirname, '../../flows'),
    BPMN_FILE: 'default.bpmn',
    DOCUMENT_FOLDER: path.join(__dirname, '../../documents'),
    LOCALES_FOLDER: path.join(__dirname, '../../config/locales')

};
