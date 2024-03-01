const prefixEndHasSlash = (prefix) => {
  if (!prefix || prefix[prefix.length - 1] !== "/") {
    return false;
  }
  return true;
};

const suffixStartHasSlash = (suffix) => {
  if (!suffix || suffix[0] !== "/") {
    return false;
  }
  return true;
};

const calcFullPath = (prefix, suffix) => {
  if (prefixEndHasSlash(prefix) && suffixStartHasSlash(suffix)) {
    return prefix.substr(0, prefix.length - 1) + suffix;
  }

  if (!prefixEndHasSlash(prefix) && !suffixStartHasSlash(suffix)) {
    return prefix + "/" + suffix;
  }

  return prefix + suffix;
};

console.log(calcFullPath("", ""));
