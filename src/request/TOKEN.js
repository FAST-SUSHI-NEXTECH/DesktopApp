import { readFileSync, writeFileSync } from 'fs';

let config = readFileSync('../../config.json', 'utf8');

config = JSON.parse(config);

const url = config.url +'/login';

const username = config.username; 
const password = config.password;
fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": username,
    "password": password
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
  
  const mergedData = {...config, ...data};
  
  writeFileSync('../../config.json', JSON.stringify(mergedData, null, 2));
})
.catch((error) => {
  console.error('Error:', error);
});