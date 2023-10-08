export default URL =>{
    const paramString = URL.include('?') ? URL.split('?')[1].split('&'): [];
    const param = {};


    paramString.forEach(param =>{
        const paramSplit =param.split('='); 
        param[paramSplit[0]] = paramSplit[1];
    })

    return param;
}