#!/usr/bin/env node

const builder = require('./builder');
const path = require('path');

builder.build({rootFolder: path.resolve('.'), srcFolder : path.resolve('src', 'app')});



