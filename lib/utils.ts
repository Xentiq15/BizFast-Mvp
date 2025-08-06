export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK'
  }).format(value);
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}