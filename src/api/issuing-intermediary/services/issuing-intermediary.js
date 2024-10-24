'use strict';

/**
 * issuing-intermediary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::issuing-intermediary.issuing-intermediary');
