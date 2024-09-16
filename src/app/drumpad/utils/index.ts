export const getColorForIndex = (index: number, rowsCount: number, cardsPerRow: number): string => {
  // Вычисляем тон цвета в радужном спектре в зависимости от индекса элемента
  const hue = (720 / (rowsCount * cardsPerRow)) * index // Используем общее количество элементов для равномерного распределения цветов
  return `hsl(${hue}, 100%, 50%)`
}
