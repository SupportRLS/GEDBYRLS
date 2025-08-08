'use strict';

/**
 * cas-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cas-client.cas-client');
