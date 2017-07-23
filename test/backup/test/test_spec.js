describe('Testing - ', function(){
    var x;
    beforeEach(function(){
        this.x = 10;
        wait(2000);
        console.log('from beforeEach '+x);
    });

    xit('checking the value from the beforeEach variable',function(){
        console.log('from it '+this.x);
    });

    afterEach(function(){
        console.log('from afterEach '+this.x);
    })
    xit('vscode-protractor-snippets', function(){
        browser.get('');
        browser.pause(3000);
        
    });

    it('testing webdriverjs control flow', function(){
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Khaja');
        expect(browser.getTitle()).toEqual('Hello World');
        browser.sleep(5000);
    });

    it('testing the global objects', function(){
        console.log('Global Object is - ',drv);
    });

});

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}