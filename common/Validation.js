export const validateTimeStamp = time => {
    if (!time) return false;
    else if (time.trim === "") return false;
    else if (Number.parseInt(time) === NaN) return false;
    else if (Number.parseInt(time) < 1466908276) return false;
    else if (Number.parseInt(time) > 1700000000) return false;
    else return true;
  };
  
  export const validatePhone = phone => {
    const phoneReg = /^[0-9]{11,15}$/;
  
    if (phone === undefined) return false;
    else if (!phoneReg.test(phone)) return false;
  //   else if (phone.length < 11) return false;
  //   else if (phone.length > 15) return false;
    else return true;
  };
  
  export const validateEmail = email => {
    const emailReg = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
  
    if (email === undefined) return false;
    else if (!emailReg.test(email)) return false;
    else return true;
  };
  
  export const validateNumeric = num => {
      /* ID Validation */
      let regNum = /^[0-9]{1,3}$/;
    
      return regNum.test(num);
    };
  
  export const validateUID = id => {
    /* ID Validation */
    let regEx = /^[a-zA-Z0-9]*$/;
  
    return regEx.test(id);
  };
  
  export const validateAddress = address => {
    if (!address) return false;
    return address.length > 3;
  };