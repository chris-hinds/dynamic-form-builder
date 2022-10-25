const generateEmailTemplate = (formMetadata, data) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${formMetadata.title}</title>
  </head>
  <body>
    <p>Subject: ${data.payslipQuerySubject}</p>
    <br />
    <p>Payslip Date: ${data.payslipDate}</p>
    <br />
    <p>Subject: ${data.payslipQuery}</p>
  </body>
</html>`;

export default generateEmailTemplate;
