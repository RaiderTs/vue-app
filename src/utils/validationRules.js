export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Поле не должно быть пустым',
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: 'Вы привысили лимит',
});
