const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/cv.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('/app/cv_text.txt', data.text);
    console.log('PDF parsed successfully');
}).catch(function(error) {
    console.error('Error parsing PDF:', error);
});
