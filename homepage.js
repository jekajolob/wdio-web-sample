var assert = require('assert');
var request = require('request');

     // describe - типа тест suite
     describe('webdriver.io page', function() {           // название тест suite [webdriver.io page]
         it('should have the right title', function () {  // название теста [should have the right title]
             browser.url('/');                            // переход на url установленный по умолчанию [webdriver.io]
             var title = browser.getTitle();              //  запись в переменную тайтл страницы
             assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js'); // провеерка. сравнение title==WebdriverIO - WebDriver bindings for Node.js
     });

     describe('Api page', function () {
         it('should have a link to it from the home page', function () {
             browser.url('/');
             var hasApiLink = browser.isExisting('=API');  // перейти по ссылке [API]

             assert(hasApiLink);
             //browser.isExisting('a[href="/api.html"]');

         })

         it('should take you to the API page', function () {
             browser.url('/');
             browser.click('=API');                        // клик по ссылке API

             var title = browser.getTitle();
             assert.equal(title, 'WebdriverIO - API Docs');


         })

         it('should filter search results', function () {
             browser.url('/api.html');

             browser.setValue('input[name="search"]', 'debug'); // поиск по имени [search] и ввод значения [debug]
             browser.saveScreenshot('api-with-result.png');     // сохранить скриншот в корень папки проэкта с именем [api-with-result.png]



         })
     })
 });
