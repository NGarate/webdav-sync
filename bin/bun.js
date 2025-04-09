#!/usr/bin/env bun

import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set runtime flag
globalThis.isBunRuntime = true;

// Import and execute the Bun-specific version
const { default: app } = await import(pathToFileURL(join(__dirname, '../dist/bun/file-sync.js')).href);
app();
