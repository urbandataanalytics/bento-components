export const getInitials = (string, numberOfInitials = 2) => {
  return string
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, numberOfInitials);
};
