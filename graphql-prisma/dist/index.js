'use strict';

require('@babel/polyfill');

var _graphqlYoga = require('graphql-yoga');

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _prisma = require('./prisma');

var _prisma2 = _interopRequireDefault(_prisma);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pubsub = new _graphqlYoga.PubSub();

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: _resolvers2.default,
  context: function context(request) {
    return {
      db: _db2.default,
      pubsub: pubsub,
      prisma: _prisma2.default,
      request: request
    };
  },

  fragmentReplacements: _prisma.fragmentReplacements
});

server.start({ port: process.env.PORT || 4000 }, function () {
  console.log('The server is up!');
});