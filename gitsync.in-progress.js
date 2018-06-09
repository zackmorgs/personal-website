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

class Git {
  constructor (_path, origin) {
    console.log('Git()');
    this.props.InstallPath = _path;
    this.props.Origin = _origin;
    Install();
  }
  Install() {
    var shouldInstall =
    if (child_process) {

    }

    this.props.InstallProcess = child_process.exec('cd ~/ && git clone ' + this.Origin)
  }
  Deploy () {
    console.log("Deploy()");
    this.props.DeployProcess = child_process.exec('cd ~/portfolio-project/ && npm run deploy');
    this.AwaitUpdate();
  }
  Sync () {
    console.log('Syncing..')
    this.props.DeployProcess.
    child_process.exec('sudo rm ~/').exec('');

  }
  CheckIfShouldUpdate() {
    console.log('Checking if should re-clone to Github (master) branch.')
    var git = {};
    git.status = function () {
      return
    }
    if () {
      return true;
    } else {
      return false;
    }
  }
  AwaitUpdate(polling_rate) {
    console.log('awaiting git update.');
    this.Watch(polling_rate ? pollingrate || 1000);
  }
  Watch (polling_rate) {
    setInterval(this.CheckIfShouldUpdate(), polling_rate);
  }
}


var PersonalWebsite = new Git("~/", 'https://github.com/zackmorgs/personal-website');
PersonalWebsite.Watch();
