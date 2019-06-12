// Live-server uses chokidar, which has a long history (and as of
// 2019, current status) of problems with glob matching for watched
// directories, varying by platform also. To avoid them, we pre-glob
// the list of step directories and watch those.

const { readdirSync } = require('fs');
const liveServer = require('live-server');

const stepDirs = readdirSync('.').filter(
  dir => dir[0] >= '0' && dir[0] <= '9'
);

liveServer.start({
  open: false,
  noCssInject: true,
  ignore: '*/e2e/**',
  wait: 300,
  watch: stepDirs,
  proxy: [['/api', 'http://localhost:8085']]
});
