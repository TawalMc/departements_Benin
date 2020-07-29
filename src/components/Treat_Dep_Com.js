import Dep_Com_Data from "./Dep_Com_Data";

/** 
 * All functions to retrieve data from Dep_Com_Data
*/

export function takeDep(index) {
  let _dep = Dep_Com_Data[index];
  return _dep;
}

export function depName(theDep) {
  let _depName = theDep.Dep;
  return _depName;
}

export function comNamesArray(theDep) {
  let _comName = theDep.Com;
  return _comName;
}

export function comName(theDep, indexCom) {
  return theDep.Com[indexCom];
}

export function nbCom(theDep) {
  let _nbCom = theDep.nb_com;
  return _nbCom;
}

/** Functions to treat array */
export const all_dep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function getRandInt(min, max) {
  //min included not max
  return Math.floor(Math.random() * (max - min) ) + min;
}

function shuffleArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/** Using of treat functiond on Dep_Com_Data */

/**
 * 
 * @param {Array} depWillBeSelected 
 * depSelected is an array of dep (12) which will be shuffled
 * and will we slice the first 4 elements from them
 */
export function depSelection(depWillBeSelected) {
  let _dep_selected_arr = shuffleArr(depWillBeSelected);
  return _dep_selected_arr.slice(0, 4);
}

/**
 * 
 * @param {Array} depSelected is an array of dep (4) already shuffled
 * and we will take town from them
 */
export function comFromDepSelected(depSelected) {
  let _com_selected_arr = depSelected.map(depIndex => {
    let theDep = takeDep(depIndex);
    let comSelected = getRandInt(0, nbCom(theDep));
    return comName(theDep, comSelected);
  }); 
  
  return _com_selected_arr;
}

var deps = [];//depSelection(all_dep); // a list of departments shuffled
var com  = [];//comFromDepSelected(deps); // a list of choice of towns for each departments choosed on top
var index_choosed = []; 
var index_dep; //= deps[index_choosed]; // the real position of department in Dep_Com_Data
var dep_choosed_name = []; //= depName(takeDep(index_dep)); // the name of department which will be used to ask question

for(var i=0; i<60; i++){
  deps = depSelection(all_dep); // a list of departments shuffled
  com.push(comFromDepSelected(deps)); // a list of choice of towns for each departments choosed on top
  index_choosed.push(getRandInt(0, 4)); //contains the index of position of department. Choosed a random departments among the shuffled list of deps
  index_dep = deps[index_choosed[i]];
  dep_choosed_name.push(depName(takeDep(index_dep)));
}

export {
  com,
  index_choosed,
  dep_choosed_name
}