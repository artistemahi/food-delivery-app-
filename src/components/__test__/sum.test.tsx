import sum from "../sum"


test("some function should retun the sum of two numbers",()=>{
 const result = sum(2,2);
 expect(result).toBe(4);
})