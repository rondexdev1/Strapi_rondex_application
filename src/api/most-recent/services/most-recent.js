'use strict';

/**
 * most-recent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::most-recent.most-recent');
