export const setItem = (name, value) => {
  // 优化：判断后台返回的token数据类型是不是json格式
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}
export const getItem = name => {
  const value = window.localStorage.getItem(name)
  // 尝试把token转为对象的格式
  try {
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}
export const removeItem = name => {
  window.localStorage.removeItem(name)
}
