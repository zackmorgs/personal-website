import git from 'git-state';
import {GitDelegate} from './GitDelegate';

// my server's install location on my Digital Ocean account.
var path = '~/personal-website';
var origin = 'https://github.com/zackmorgs/personal-website.git';

git.isGit(path, function (exists) {
  'use strict';
  if (!exists) {
    // I'd prefer to assume it doesn't exist initially to keep it's lifecycle completely maintained by this.
    return git.check(path, function (err, result) {
      if (err) {
        throw err;
      } else {
        var that = this;
        var PersonalWebsite = new GitDelegate(path, origin, that);
        PersonalWebsite.Deploy();
      }
      console.log(result)
      // => { branch: 'master',
      //      ahead: 0,
      //      dirty: 9,
      //      untracked: 1,
      //      stashes: 0 }
    });
  } else {
    console.log('Sorry, your ./git doesnt appear to exist.');
    console.log('Exiting...');
    process.exit(0);
  }
});
