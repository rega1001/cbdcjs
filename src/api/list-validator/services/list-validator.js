'use strict';

/**
 * list-validator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-validator.list-validator');
