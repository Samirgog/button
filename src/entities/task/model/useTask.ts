export function useTask(url: string) {
  const handleClick = () => {
    console.log(url);
    // TODO: реализация открытия ссылки
  };

  return {
    getHandlers: () => {
      return {
        onClick: handleClick
      };
    }
  };
}
