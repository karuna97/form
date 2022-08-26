import React from "react";
import { App } from "../src/index.js";

const HomePage = ( {data}) => {
    console.log({data})
  return <App data={data}/>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  let data1=[{displayText:'Something',value:'Something'}]
  let data2=[{displayText:'Something',value:'Something'}]
  let data3=[{displayText:'Something',value:'Something'}]
  let data=[data1,data2,data3]
  let basicurl="https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1"
  //let data4=[]

  try{
  const res1 = await fetch(
    `https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/education?role=softwaredeveloper`

    
  );
    data1 = await res1.json();
    const res2 = await fetch(
        `https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/degree?education=ug`
      );
        data2 = await res2.json();
        const res3 = await fetch(
            `https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/branch?degree=be`
          );
            data3 = await res3.json();
            data=[data1,data2,data3]

            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            console.log({data})
            return response.json(); // parses JSON response into native JavaScript objects
          }
  



        catch(error){}

   //console.log({ data });

  // Pass data to the page via props
  return { props: { data } };
}



export default HomePage;