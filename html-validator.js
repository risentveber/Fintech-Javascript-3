const w3c = require('w3c-validate').createValidator();
const glob = require('glob');
const fs = require('fs');

// options is optional
glob('./04/**/*.html', {}, (er, files) => {
  files.forEach(filename => {
    fs.readFile(filename, 'utf8', (err,data) => {
      if (err) {
        return console.log('File read error: ', err);
      }

      w3c.validate(data, validationError => {
        if (validationError) {
          console.log(filename, validationError.message); // error includes [{message, context}] to help understand validation errors
        } else {
          console.log(filename, 'is valid');
        }
      });
    });
  });
});
