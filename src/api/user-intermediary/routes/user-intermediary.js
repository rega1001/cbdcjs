'use strict';

/**
 * user-intermediary router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-intermediary.user-intermediary');
