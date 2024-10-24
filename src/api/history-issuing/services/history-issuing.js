'use strict';

/**
 * history-issuing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::history-issuing.history-issuing');
