import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const obj = convertToObject(content);
  console.log(count(obj))
  console.log(namesOfCities(obj))
  console.log(humidity(obj))
  console.log(hottestDay(obj))
  console.log()
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

//Выведите количество записей с данными в переданном файле. Учтите, что первая строчка в CVS файле является заголовочной, она не содержит данных и не должна учитываться.


// Выведите дату самой жаркой погоды и город, в котором была зафиксирована эта температура


// Count: 20
// Cities: Chicago, Denver, Los Angeles, Miami, Seattle
// Humidity: Min: 58, Max: 80
// HottestDay: 2023-04-18 Los Angeles
// HottestCity: Miami