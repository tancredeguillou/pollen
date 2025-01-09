#! /usr/bin/env node

/**
 * This file defines the core commands of the MPC CLI.
 * 
 * Author: Tancrede Guillou
 * Last modified: 30/09/2024
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as handler from "../src/generalHandlers/gen.js"

import { allProviders } from "../src/providers/providers.js";

console.warn = function () { }; // suppress warnings

// Configure yargs to handle commands
yargs(hideBin(process.argv))
    // Define 'providers' globally for all commands
    .option('providers', {
        describe: "Set your providers choice.",
        type: 'array',
        demandOption: true,
        default: allProviders,
        global: true // Make it available to all commands
    })
    // Login
    .command('login', 'Login to Pollen.', {},
        (args) => (handler.login(args.providers as string[])))
    // Bucket related
    .command('createBucket', 'Create a bucket.', {},
        (args) => (handler.createBucket(args.providers as string[])))
    .command('deleteBucket', 'Empty and delete a bucket.', {},
        (args) => handler.deleteBucket(args.providers as string[]))
    .command('listBuckets', 'List all buckets in the project', {},
        (args) => (handler.listBuckets(args.providers as string[])))
    // Object related
    .command('putObject', 'Put an object into a bucket.', {},
        (args) => handler.putObject(args.providers as string[]))
    // .command('putFile', 'Put a file into a bucket.', {},
    //     (args) => handler.putFile(args.providers as string[]))
    .command('getObject', 'Get an object from a bucket.', {},
        (args) => handler.getObject(args.providers as string[]))
    .command('deleteObject', 'Delete an object from its bucket.', {},
        (args) => handler.deleteObject(args.providers as string[]))
    .command('listObjects', 'List all objects inside a bucket.', {},
        (args) => handler.listObjects(args.providers as string[]))
    .demandCommand(1, 'You need to specify at least one command.')
    .help()
    .argv;