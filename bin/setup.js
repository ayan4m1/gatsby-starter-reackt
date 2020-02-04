const { writeFile } = require('fs');
const { resolve } = require('path');
const { prompt } = require('inquirer');
const { stringify } = require('envfile');

const { green, red } = require('colors');

const urlValidator = input =>
  /(?i)\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i.test(
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

  await writeFile(resolve(__dirname, '..', '.env'), envContents);

  // eslint-disable-next-line
  console.log(
    `Your application has been set up ${green('successfully!')} Enjoy Gatsby!`
  );
};

getAnswers();
