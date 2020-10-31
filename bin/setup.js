const { writeFile: rawWriteFile } = require('fs');
const { resolve } = require('path');
const { prompt } = require('inquirer');
const { stringify } = require('envfile');
const { promisify } = require('util');

const { green, red } = require('colors');

const writeFile = promisify(rawWriteFile);

const urlValidator = (input) =>
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i.test(
    input
  ) || red('Enter a valid URL');

const getAnswers = async () => {
  // eslint-disable-next-line
  console.log(`
  ${green('Welcome to gatsby-starter-reackt!')}

  This setup application will ask you a series of questions to help customize
  your environment and get you up and running faster. Enjoy!
  `);
  const questions = [
    {
      name: 'addRedux',
      type: 'confirm',
      message: 'Add Redux?'
    },
    {
      name: 'addJest',
      type: 'confirm',
      message: 'Add Jest?'
    },
    {
      name: 'appUrl',
      message: 'Application URL',
      validate: urlValidator
    },
    {
      name: 'gaTrackingId',
      message: 'Google Analytics Tracking ID'
    }
  ];
  const answers = await prompt(questions);

  const envContents = await stringify({
    APP_URL: answers.appUrl,
    GA_TRACKING_ID: answers.gaTrackingId || ''
  });
  const appUrl = new URL(answers.appUrl);

  await writeFile(resolve(__dirname, '..', '.env'), envContents);
  await writeFile(resolve(__dirname, '..', 'static', 'CNAME'), appUrl.hostname);

  // eslint-disable-next-line
  console.log(
    `Your application has been set up ${green('successfully')}!   Enjoy Gatsby!`
  );
};

getAnswers();
