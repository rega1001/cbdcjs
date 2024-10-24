'use strict';

/**
 * transaction-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transaction-type.transaction-type');
