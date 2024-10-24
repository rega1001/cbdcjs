'use strict';

/**
 * validator router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::validator.validator');
