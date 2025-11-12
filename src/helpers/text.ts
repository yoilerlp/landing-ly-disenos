export const getDescriptionLines = (description: string) => {
  return description?.toUpperCase()?.replaceAll('\n', '<br />');
};

