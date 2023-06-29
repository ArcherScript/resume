const fs = require('fs');
const pdf = require('html-pdf-node');

const htmlFilePath = './resume.html';
const pdfFilePath = './resume.pdf';

// Read HTML file
fs.readFile(htmlFilePath, 'utf8', (err, html) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }

  // Set options for PDF generation
  const options = {
    format: 'A4',
    path: pdfFilePath,
  };

  // Generate PDF from HTML
  pdf.generatePdf({ content: html }, options)
    .then(pdfBuffer => {
      // Write PDF buffer to file
      fs.writeFile(pdfFilePath, pdfBuffer, (err) => {
        if (err) {
          console.error('Error writing PDF file:', err);
          return;
        }
        console.log('PDF file generated successfully:', pdfFilePath);
      });
    })
    .catch(error => {
      console.error('Error generating PDF:', error);
    });
});