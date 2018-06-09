class SantizedInput {
  // this is created to sanitize all inputs of this scary function
  constructor () {

  }
  exec (argument) {
    if (argument){
      return child_process.exec(argument);
    } else {
      return false;
    }
  }
}

default export class GitDelegate {
  constructor (_path, origin, git_sync) {
    console.log('Git()');
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
    this.props.git_sync = git_sync;
  }
  Install () {
    this.shouldUpdate = shouldUpdate || (function () {
      return this.props.git_sync.check(this.props.InstallPath, function (err, result) {
        if (err){
          console.log("Unfortunately an error has occured:", err);

          process.exit(0);
        } else {
          var local_info = result;
          return Boolean(local_info.ahead)
        }
      })();
    })();
    if (this.shouldUpdate) {
      this.props.RemovalProcess = child_process.exec('cd ~/ && rm ' + this.props.InstallPath + ' -r  && mkdir portfolio-project && cd portfolio-project').on('close', function () {
        this.props.InstallProcess = child_process.exec('cd ~/ && git clone ' + this.props.Origin).on('exit' => {
          this.shouldUpdate(false);
          this.Deploy();
        })
      });
    } else {
      this.shouldUpdate(false);
    }
  }
  Deploy () {
    console.log("Deploy()");
    this.props.DeployProcess = child_process.exec('cd ~/portfolio-project/ && npm run deploy').on('connected', function () {
      this.AwaitUpdate();
    });
  }
  Sync () {
    console.log('Syncing..')
    this.props.DeployProcess.kill();
    // just delete everything and clone the origin. Most like other developer client experience. ::shrug::
    this.props.GitCloneProcess = child_process.exec('sudo rm ~/').exec('git clone ' + this.Origin);
    GitCloneProcess.on('exit', function () {
      Deploy();
    });
  }
  shouldUpdate(BooleanArg) {
    return BooleanArg;
  }
  checkIfShouldUpdate() {
    console.log('Checking if should re-clone to Github (master) branch...')
    // var git = {};
    // git.status = function () {
    //   return
    // }

  }
  AwaitUpdate(polling_rate) {
    console.log('awaiting git update.');
    this.Watch(polling_rate ? pollingrate || 1000); // just passes default polling rate if no arg is sent. default is
  }
  Watch (polling_rate) {
    setInterval(this.checkIfShouldUpdate(), polling_rate);
  }
}
