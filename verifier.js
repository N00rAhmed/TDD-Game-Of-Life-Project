function verifyPass(password){
    if(password === null){
        return false
    }
    if (password.length<9){
        return false;
    }else if(password.toUpperCase() === password){
        return false;
    }
    else{
        return true;
    }
}
export{verifyPass}