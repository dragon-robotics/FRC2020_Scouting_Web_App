var express = require('express');
var Promise = require('bluebird');
var router = express.Router();
var routerPromise = require('request-promise');
var _ = require('lodash');