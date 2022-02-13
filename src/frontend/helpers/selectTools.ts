export const getSelectedItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
  return {
    key: e.target.value,
    text: e.target.options[e.target.selectedIndex].text,
  };
};