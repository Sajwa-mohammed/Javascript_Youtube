let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object
 let myCreatedDate= new Date(2023,0,23)
 console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
  let myCreatedDateandTime= new Date(2023,0,23,5,7)
  console.log(myCreatedDateandTime.toLocaleString()); //1/23/2023, 5:07:00 AM
  let mycreatedDatenew= new Date("2026-01-14")
  console.log(mycreatedDatenew.toLocaleString());

  let mytimestamp=Date.now()

  console.log(mytimestamp);
  console.log(mycreatedDatenew.getTime());
  
  console.log(Math.floor(Date.now()/1000));
  let newDate= new Date()
  console.log(newDate);
  console.log(newDate.getMonth() +1);
  console.log(newDate.getDay());
  newDate.toLocaleString('default',{
    weekday: "long"
  });

  
  
  
  
  

 


