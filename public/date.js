const getYearCurrent =new Date().getFullYear()
const getMonthCurrent =new Date().getMonth()+1
const getDateCurrent =new Date().getDate()
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayName = days[new Date().getDay()];

export {getYearCurrent,getMonthCurrent,getDateCurrent,dayName}