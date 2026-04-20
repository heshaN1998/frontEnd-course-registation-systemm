import { Console, error } from "console";

export const AJAX=()=>{
    const ajaxDataLoad=()=>{
        const xhr=new XMLHttpRequest();
        xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

        xhr.onload=()=>{
            //200 is success state
            if(xhr.status===200){
                console.log(xhr.responseText);
            }
        };
        xhr.onerror=()=>{
            console.log("Request Failed")
        };
        xhr.send();
    }


    const ajaxDataLoadViaFetch=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data=>{
            console.log(data.json);
        })
        .catch(error=>console.error(error));
    }
    return(
        <>
        <button onClick={ajaxDataLoad}>Get Data pure AJAX</button>
       <button onClick={ajaxDataLoadViaFetch}>Get Data Fetch</button>
        </>
    );
}