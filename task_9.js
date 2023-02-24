function myFullNameManipulation(name, surName, funcChangeName) {
    var fullName = name + " " + surName;
    if(funcChangeName!=null){
      return funcChangeName(fullName);
    }
      return fullName;
};
    
    var nameToUpperCase = function(strFullName) {
    var fullName = "" + strFullName;
      return fullName.toUpperCase();
    };
    
    var nameToLowerCase = function(strFullName) {
    var fullName = "" + strFullName;
      return fullName.toLowerCase();
    };

    var nameToCapitalLetters = function(strFullName) {
      var fullName = "" + strFullName;
        return fullName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    };

    function remuveSpaces(str) {
      var tempStr = "" + str;
      for (let i = 0; i < str.length; i++) {
        tempStr = tempStr.replace("  "," ");
      }
      return tempStr;
    };

    console.log(myFullNameManipulation("m   ila ","   Star",nameToCapitalLetters));
    console.log(remuveSpaces(myFullNameManipulation("  milaa      ","  Star      ",nameToCapitalLetters)));

