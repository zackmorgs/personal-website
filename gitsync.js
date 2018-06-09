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
    this.props.path = _path;
    this.props.origin = _origin;
  }
  Deploy () {
    console.log("Deploy()");
  }
  Sync () {
    console.log('Syncing..')
    child_process.exec('sudo rm ~/');
  }
  Await () {
    console.log('awaiting git update.');
  }
  CheckIfShouldUpdate() {
    console.log('Checking if should re-clone to Github (master) branch.')
    var git = {};
    git.status = function () {
      return
    }()
    if () {
      return true;
    } else {
      return false;
    }
  }
  Watch () {
    setInterval(this.CheckIfShouldUpdate(), 1000);
  }
}


var personal_website = new Git();
personal_website.Watch();
