describe("hellotest",() => {

   let expected = '';

   beforeEach(()=> {
       expected = 'Say Hello To Shravan';
   });
   
   afterAll(()=> {
      expected='';
   })

   it('checks if it is day saying hello',() =>{
   expect(sayHello()).toBe(expected)});  

});