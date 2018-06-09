// class SantizedInput {
//   // this is created to sanitize all inputs of this scary function
//   constructor () {

//   }
//   exec (argument) {
//     if (argument){
//       return child.exec(argument);
//     } else {
//       return false;
//     }
//   }
// }
import * as child from 'child_process';

export class GitDelegate {
  constructor (_path, _origin, _gitsync) {
    console.log('Git()');
    console.log('test');
    this.props.InstallPath = _path;
    this.props.Origin = _origin;
    this.shouldUpdate = false;
    this.Install = this.Install.bind();
    this.Deploy = this.Deploy.bind();
    this.Sync = this.Sync.bind();
    this.shouldUpdate = this.shouldUpdate.bind();
    this.checkIfShouldUpdate = this.checkIfShouldUpdate.bind();
    this.AwaitUpdate = this.AwaitUpdate.bind();
    this.Watch = this.Watch.bind();
    this.props.git_sync = _gitsync;
    this.shouldUpdate = this.shouldUpdate.bind();
  }
  shouldUpdate () {
    return this.props.git_sync.check(this.props.InstallPath, function (err, result) {
      if (err) {
        console.log('Unfortunately an error has occured: ', err);
        process.exit(0);
      } else {
        var localResult = result;
        return Boolean(localResult.ahead);
      }
    });
  }
  Install () {
    if (this.shouldUpdate()) {
      this.props.RemovalProcess = child.exec('cd ~/ && rm ' + this.props.InstallPath + ' -r  && mkdir ' + this.props.InstallPath + ' && cd ' + this.props.InstallPath).on('close', function () {
        this.props.InstallProcess = child.exec('cd ~/ && git clone ' + this.props.Origin).on('exit', function () {
          this.Deploy();
        });
      });
    } else {
      this.shouldUpdate(false);
    }
  }
  Deploy () {
    console.log('Deploying...');
    this.props.ReadyDeployProcess = child.exec('cd ~/portfolio-project/ && npm run ready-deploy').on('finished', function () {
      this.AwaitUpdate();
    });
  }
  Sync () {
    console.log('Syncing..');
    this.props.DeployProcess.kill();
    // just delete everything and clone the origin. Most like other developer client experience. ::shrug::
    this.props.GitCloneProcess = child.exec('sudo rm ~/').exec('git clone ' + this.Origin);
    this.props.GitCloneProcess.on('exit', function () {
      console.log('Synced.');
      this.Deploy();
    });
  }
  checkIfShouldUpdate () {
    console.log('Checking if should re-clone to Github (master) branch...');
    if (this.shouldUpdate()) {
      this.Install(); // yes it double checks oh well.
    }
  }
  AwaitUpdate () {
    console.log('awaiting git update.');
    this.Watch(1000);
  }
  Watch () {
    setInterval(this.checkIfShouldUpdate());
  }
}

export default GitDelegate;
