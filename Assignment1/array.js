
    // Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only
    
    let getEven = ()=>
    {
        const Arr=[1,2,3,4,5,6,7,8,9,10];
        for(let i=0; i<=Arr.length; i++)
        {
            if(Arr[i]%2==0)
            {
                console.log(Arr[i]);
            }
        }
    }
    getEven();


    // Find the maximum consecutive 1's in an array of 0's and 1's.
    // Example:
    // a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
    // b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

     const getConsecutive = () =>
    {
        const arr=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
        // const arr1=[1,0,0,0,0,1,0,0,0,1];
        let count=0;
        let max=0;

        for(let i=0; i<arr.length; i++)
        {
            if (arr[i]==0)
            {
               count=0;
            }   
            else
            {
               count++;
               max=count>max?count:max;
            }   
        }
        console.log(max);
    }
     getConsecutive();

// Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);


      const getDuplicate = () =>
       {
        var array =[1,2,3,1];
        var array=[]
        var arraynew=[];
        //loop data
        for(var m=0;m<=101;m++)
        {
            if(m==7)
            {
                array.push(m)
            }
            array.push(m)
        }
        for(var i =0;i<array.length;i++)
        {
            var check1 = array.includes(array[i])
            var value = array[i];
            delete array[i]
            var check2 = array.includes(value)
            if(check1&&check2)
            {
                arraynew.push(value)
            }
        }
        console.log(arraynew)
      }   
     getDuplicate();


    //  Let’s see we an api url www.example.com/api/get/1 
    //  Write a sample code to call this rest api and display the result.
     
        fetch("www.example.com/api/get/1")
        .then( (Apidata) =>
          {
            return Apidata.json();  //convert json data into js objects w.t.h of json()
          })
        .then( (Finaldata)=>
         {
           console.log(Finaldata);

         })
        .catch( (error)=>            // if promise is not fulfilled or give some error
        {
           console.log(`The Error is : ${error}`);
        })


        // Assume there is a object of this format 
        // var obj = {
        //  “id” : 4, “name” : “abc”,
        //  “id” : 10, “name” : “ab2”,
        //  “id” : 5, “name” : “abc3”,
        //  “id” : 6, “name” : “abc5”
        // }
        // It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.
        
        // Write a code to sort the object by id 
        // I.e final output should have objected sort by id’s .

//     var obj = 
//         {
//             “id” : 10, 
//             “name” : “ab2”
//         },
//         {
//             “id” : 5, 
//             “name” : “abc3”
//         },
//         {
//             “id” : 6,
//             “name” : “abc5”
//         },
//         {    
//             “id” : 4, 
//             “name” : “abc”
//         }
//     const getSort=()=>
//     {
//         obj.sort(function(a,b)
//         {
//             return a.id - b.id;
//         });
//     }
// getSort();