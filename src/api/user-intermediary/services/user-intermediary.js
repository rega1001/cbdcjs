'use strict';

/**
 * user-intermediary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-intermediary.user-intermediary');
