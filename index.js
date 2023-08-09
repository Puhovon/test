import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const obj = convertToObject(content);
  console.log(count(obj))
  console.log(namesOfCities(obj))
  console.log(humidity(obj))
  console.log(hottestDay(obj))
  console.log(hottestCity(obj))
  // END
}

function convertToObject(content){
  const currentContent = content.split('\n').filter(el => el !== '');
  const keys = currentContent[0].replace(/ /gi, '_').split(',');
  const obj = currentContent.slice(1).map((el) => {
    const values = el.split(',');
    const object = keys.reduce((acc, item, index) => {
      acc[item] = values[index];
      return acc;
    }, {});
    return object;
  })
  return obj;
}


const count = (obj) => `Count: ${obj.length}`; 

const namesOfCities = (obj) => `Cities: ${_.uniq(obj.map(({ City }) => City)).sort().join(', ')}`; 

const humidity = (obj) => `Humidity: Min: ${_.min(obj.map(( { Humidity } ) => Humidity))}, Max: ${_.max(obj.map(( { Humidity } ) => Humidity))}`;

// Выведите дату самой жаркой погоды и город, в котором была зафиксирована эта температура
const hottestDay = (obj) => {
  const hottest = obj.sort((a, b) => b.Max_Temperature - a.Max_Temperature)[0];
  return `HottestDay: ${hottest.Date} ${hottest.City}`
}

const hottestCity = (obj) => {
  const cities = obj.reduce((acc, item) => {
    const prop = item.City.replace(' ','_');
    acc[prop] = (acc[prop] ?? 0) + Number(item.Max_Temperature);
    return acc;
  }, {})
  return cities;
}