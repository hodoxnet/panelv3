export const formatPhoneNumber = (value: string): string => {
  // Remove all non-numeric characters
  const numbers = value.replace(/\D/g, '');
  
  // Format as: 0 (000) 000 00 00
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{1})?(\d{3})?(\d{3})?(\d{2})?(\d{2})?/, function(_, p1, p2, p3, p4, p5) {
        let parts = [];
        if (p1) parts.push(p1);
        if (p2) parts.push(`(${p2})`);
        if (p3) parts.push(p3);
        if (p4) parts.push(p4);
        if (p5) parts.push(p5);
        return parts.join(' ');
      });
  }
  return numbers;
};