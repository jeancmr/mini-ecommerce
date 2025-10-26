export const getTimeAgo = (date: string) => {
  const today = new Date();
  const reviewDate = new Date(date);
  const diffTime = Math.abs(today.getTime() - reviewDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
