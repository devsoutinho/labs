import fs from 'fs';

const TEST_MAIN_FILE = './test.cljs';

const allFilesTestFiles = walk()
  .filter(file => file.endsWith('_test.cljs'))
  .map(file => file?.replace('./', '')?.split('/')?.join('.')?.replace('.cljs', '')?.replaceAll('_', '-'));

const testFile = fs.readFileSync(TEST_MAIN_FILE, { encoding: 'utf-8' });
const output = testFile
  .replace(
    /(;%LOAD_TEST_NS_REQUIRE_START%)([\S\s]*?)(;%LOAD_TEST_NS_REQUIRE_END%)/gmi,
    `$1\n${allFilesTestFiles.map(f => `[${f}]`).join('\n')}\n$3`
  )
  .replace(
    /(;%LOAD_TEST_NS_LIST_START%)([\S\s]*?)(;%LOAD_TEST_NS_LIST_END%)/gmi,
    `$1\n${allFilesTestFiles.map(f => `'${f}`).join('\n')}\n$3`
  );


fs.writeFileSync(TEST_MAIN_FILE, output);

// ================================================

// get all files recursive
function walk(dir = "./src") {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    if (file == "./.nrepl-port") return;
    if (file == "./.env") return;
    if (file == "./.lsp") return;
    if (file == "./package.json") return;
    if (file == "./.calva") return;
    if (file == "./.clj-kondo") return;
    if (file == "./node_modules") return;

    var stat = fs.statSync(file);

    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else results.push(file);
  });
  return results;
}
