#!/usr/bin/node
const { FilesManager } = require('turbodepot-node');
const filesManager = new FilesManager();
filesManager.mergeFiles([process.argv[2], process.argv[3]], process.argv[4], '');
