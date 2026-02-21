// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = ({
  testDir: './tests',
  retries: 1,
  timeout: 32000,
  expect: {
    timeout:10000,
  },

  reporter: 'html',

  // Configure projects for major browsers 
  projects: [

   {
    name: 'chrome',
      use: {
      browserName: 'chromium',
      headless: false,
      screenshot: 'only-on-failure', // on, off, only-on-failure
      video: 'retain-on-failure', //on, off, retain-on-retry, on-first-retry
      trace : 'retain-on-failure',// on, off, retain-on-failure, on-first-retry
      }
    },

   {
    name: 'firefox',
      use: {
      browserName: 'firefox',
      headless: false,
      screenshot: 'only-on-failure', // on, off, only-on-failure
      video: 'retain-on-failure', //on, off, retain-on-retry, on-first-retry
      trace : 'retain-on-failure',// on, off, retain-on-failure, on-first-retry
      }
    },

   {
    name: 'edge',
      use: {
      browserName: 'chromium',
      channel: 'msedge',
      headless: false,
      screenshot: 'only-on-failure', // on, off, only-on-failure
      video: 'retain-on-failure', //on, off, retain-on-retry, on-first-retry
      trace : 'retain-on-failure', // on, off, retain-on-failure, on-first-retry
      }
    },

   {
    name: 'safari',
      use: {
      browserName: 'webkit',
      headless: false,
      screenshot: 'only-on-failure', // on, off, only-on-failure
      video: 'retain-on-failure', //on, off, retain-on-retry, on-first-retry
      trace : 'retain-on-failure',// on, off, retain-on-failure, on-first-retry
      }
      
    }

  ],
  
});

module.exports = config;
