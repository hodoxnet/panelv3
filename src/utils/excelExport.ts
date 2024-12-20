export const exportToExcel = (products: any[], selectedIds: string[], format: 'excel' | 'csv' = 'csv') => {
  // Sadece seçili ürünleri filtrele
  const selectedProducts = products.filter(product => selectedIds.includes(product.id));
  
  // Başlık satırı
  const headers = [
    'Başlık',
    'Kategori', 
    'Yeni Ürün',
    'Anasayfa',
    'Durum'
  ];

  // Verileri dönüştür
  const data = selectedProducts.map(product => [
    product.title,
    product.category,
    product.isNew ? 'Hayır' : 'Evet',
    product.isHomepage ? 'Evet' : 'Hayır',
    product.status === 'active' ? 'Aktif' : 'Pasif'
  ]);

  // CSV formatına dönüştür
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      row.map(cell => 
        typeof cell === 'string' && cell.includes(',') 
          ? `"${cell}"` 
          : cell
      ).join(',')
    )
  ].join('\n');

  // Dosyayı indir
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `urunler.${format === 'csv' ? 'csv' : 'xlsx'}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};