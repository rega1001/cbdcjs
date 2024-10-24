'use strict';

/**
 * user-central-bank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-central-bank.user-central-bank');
