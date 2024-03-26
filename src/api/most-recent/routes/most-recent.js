'use strict';

/**
 * most-recent router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::most-recent.most-recent');
