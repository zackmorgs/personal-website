// take a look at sites_worked.json
// I need to pair up the graphics for each of the sites I've worked.
// ...no way I'm typing all that!

// Includes & Requires
const { exec } = require('child_process');
var jsonfile = require('jsonfile');

var sites_worked =
  'C:/Users/zmorg/Drive/Artemis/dev/zackmorgs/portfolio-project/~current/hecate/src/json/sites_worked.json';
var directory =
  'C:/Users/zmorg/Drive/Artemis/dev/zackmorgs/portfolio-project/~current/hecate/public/img';
var get_all_files_cmd =
  "cd '{directory}'; for /r %i in (*) do @echo %i >> all_file_paths.txt;";

// Get all the files in our img directory.
get_all_files_cmd.replace('{directory}', directory);

exec(get_all_files_cmd, (err, stdout, stderr) => {
  if (err) {
    return -1;
  }
  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

var readline = require('linebyline');
var rl = readline('./all_file_paths.txt');

// read the file line by line.
rl.on('line', function(line, lineCount, byteCount) {
  // do something with the line of text
  console.log(line);
}).on('error', function(e) {
  // something went wrong
});

// jsonfile.readFile(sites_worked, function(err, obj) {
//   console.dir(obj)
// })
