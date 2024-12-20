export const isValidImportFile = (file: File): boolean => {
  const validTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
    'application/vnd.ms-excel', // .xls
    'text/csv', // .csv
    'application/csv' // Bazı sistemlerde farklı MIME type
  ];

  // Dosya uzantısını kontrol et
  const extension = file.name.split('.').pop()?.toLowerCase();
  const validExtensions = ['xlsx', 'xls', 'csv'];

  return file && (
    validTypes.includes(file.type) || 
    (extension && validExtensions.includes(extension))
  );
};