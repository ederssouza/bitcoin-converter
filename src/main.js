#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
const convertBitcoin = require('./ConvertBitcoin');

program
  .version(pkg.version)
  .description('Convert Bitcoin to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-A, --amount <amount>', 'Value in Bitcoin to converted. (Default: 1)')
  .parse(process.argv);

convertBitcoin(program.currency, program.amount);
