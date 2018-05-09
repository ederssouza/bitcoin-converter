#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');
var convertBitcoin = require('./ConvertBitcoin');

program.version(pkg.version).description('Convert Bitcoin to any currency defined').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A, --amount <amount>', 'Value in Bitcoin to converted. (Default: 1)').parse(process.argv);

console.log(convertBitcoin(program.currency, program.amount));