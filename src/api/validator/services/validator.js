'use strict';

/**
 * validator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::validator.validator');
