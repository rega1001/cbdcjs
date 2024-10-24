'use strict';

/**
 * validator controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::validator.validator');
