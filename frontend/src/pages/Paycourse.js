const Paycourse=()=>{
const paramss = new URLSearchParams(window.location.search);
const course_name=paramss.get('course_name')
    const course_price=paramss.get('course_price')
const handleSubmit=()=>{
    fetch(`/api/indvtrainee/paycourse?course_name=${course_name}&course_price=${course_price}&quantity=${1}`,{
        method:"POST",
        body:JSON.stringify({items:[{id:1,quantity:3},{id:2,quantity:4}]}),
        headers:{'Content-Type' : 'application/json'}
    }

    ).then(res=>{
        //console.log(res.json())
        if(res.ok)return(res.json)
        return(res.json.then(json=>Promise.reject))
    })
    .then(({url})=>{
        window.location=url
    }
    )
}
return(
    <form >
        <button onClick={handleSubmit()}>pay</button>
    </form>
)
}

export default Paycourse




   
    

