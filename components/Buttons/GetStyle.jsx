function getStyleType(styleType){
    if(styleType==="primary"){
        return "bg-blue-500";
    }else if(styleType === "warning"){
        return "bg-red-300";
    }else{
        return "bg-white";
    }
}

export default getStyleType;