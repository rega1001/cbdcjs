'use strict';

/**
 * user-mobile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-mobile.user-mobile');
