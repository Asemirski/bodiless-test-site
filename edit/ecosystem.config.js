const fs = require('fs');

const appVolume = () => process.env.APP_VOLUME || '/app/volume';
const gatsbyPort = () => process.env.PORT || 8888;
const siteDirName = () => process.env.APP_SITE_DIR_NAME || 'test-site';
const cwd = `${appVolume()}/root/sites/${siteDirName()}`;
const feScript = `${appVolume()}/root/node_modules/.bin/gatsby`;
const beScript = `${appVolume()}/root/node_modules/.bin/bodiless-backend`;

module.exports = {
  apps: [
    {
      name: 'frontend',
      cwd,
      script: feScript,
      args: `develop --port ${gatsbyPort()}`,
    },
    {
      name: 'backend',
      cwd,
      script: beScript,
    },
  ],
};
