const fnLink = (props, pathname, search) => {
  if (!props.history) {
    console.error(props);
    return;
  }
  const location = {
    pathname: pathname,
    search: search,
  };
  props.history.push(location);
};

export { fnLink };
