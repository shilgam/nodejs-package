import path from 'path';

const fs = require('fs');

const pcaMetricsContent = fs.readFileSync(path.resolve(__dirname, 'pca_metrics.json'));

const dimValuesContent = fs.readFileSync(path.resolve(__dirname, 'dim_values.txt'));

const dimValuesArray = dimValuesContent.toString().split('\n')
  .filter(el => el !== '') // remove empty lines
  .filter(el => !el.includes('//')); // remove commented lines

console.log(`Number of aggregated dim values: ${dimValuesArray.length}.\n`);

console.log('CALCULATION:');
// console.log(JSON.parse(pcaMetricsContent));

const acc = (accumulator, currentValue) => accumulator + currentValue;

const arrOfParam = param => dimValuesArray.map(dimName =>
  JSON.parse(pcaMetricsContent).kpi_pca_metrics.visit_metrics.dimensions[dimName][param]);

arrOfParam('impressions').reduce(acc);

console.log(`impressions: ${arrOfParam('impressions').reduce(acc)}`);
console.log(`post_exposure_visits: ${arrOfParam('post_exposure_visits').reduce(acc)}`);
console.log(`total_visits_projected: ${arrOfParam('total_visits_projected').reduce(acc)}`);
console.log(`exposed_visits: ${arrOfParam('exposed_visits').reduce(acc)}`);
