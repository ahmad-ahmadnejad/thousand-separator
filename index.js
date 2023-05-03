const ThousandSeparator = (str) => { 
    const value = String(str)
    .replace(/[^0-9\.]/g, '')
    .split('.')

  return (
    (value[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? '') +
    (typeof value[1] !== 'undefined' ? `.${value[1]}` : '')
)}
module.exports=ThousandSeparator