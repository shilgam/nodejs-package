import fs from 'fs';
import cheerio from 'cheerio';

const userFile = fs.readFileSync('././src/10_html/l9_grouping/index.html');
const userStyle = fs.readFileSync('././src/10_html/l9_grouping/style.css');


const $ = cheerio.load(userFile);
document.documentElement.innerHTML = userFile;

// add styles to head for testing purposes
const head = document.getElementsByTagName('head')[0];
const styleEl = document.createElement('style');
styleEl.type = 'text/css';
styleEl.innerHTML = userStyle;
head.appendChild(styleEl);

test('meta charset must be "UTF-8"', () => {
  expect($('meta').attr('charset').toUpperCase()).toBe('UTF-8');
});

test('page title must exist', () => {
  expect($('title').text()).not.toBe('');
});

test('"body must include #header", "#main" and "#footer" divs', () => {
  expect($('body').children().length).toEqual(3);
  expect($('body').children('#header').text()).not.toBe('');
  expect($('body').children('#main').text()).not.toBe('');
  expect($('body').children('#footer').text()).not.toBe('');
});

test('#header must include <h1>, <h3> and <p>', () => {
  expect($('#header').children().length).toEqual(3);
  expect($('#header').children('h1').text()).not.toBe('');
  expect($('#header').children('h3').text()).not.toBe('');
  expect($('#header').children('p').text()).not.toBe('');
});

test('#header must include <p> with 2 links', () => {
  expect($('#header').children('p').children().length).toEqual(2);
  expect($('#header').children('p').children('a').text()).not.toBe('');
  expect($('#header').children('p').children('a').next()
    .text()).not.toBe('');
});

test('#header margin bottom must be 32px', () => {
  const h = document.getElementById('header');
  const userStyle = getComputedStyle(h, null);
  expect(userStyle.marginBottom).toEqual('32px');
});

test('h1 font size must be 36px', () => {
  const h = document.getElementsByTagName('h1')[0];
  const userStyle = getComputedStyle(h, null);
  expect(userStyle.fontSize).toEqual('36px');
});

test('#footer margin top must be 64px', () => {
  const h = document.getElementById('footer');
  const userStyle = getComputedStyle(h, null);
  expect(userStyle.marginTop).toEqual('64px');
});
