'use strict';

/**
 * action-component router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::action-component.action-component');
