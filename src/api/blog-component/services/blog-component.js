'use strict';

/**
 * blog-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-component.blog-component');
