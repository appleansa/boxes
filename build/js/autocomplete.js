var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhdXRvY29tcGxldGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvdW50cmllcyA9IFtcIkFmZ2hhbmlzdGFuXCIsXCJBbGJhbmlhXCIsXCJBbGdlcmlhXCIsXCJBbmRvcnJhXCIsXCJBbmdvbGFcIixcIkFuZ3VpbGxhXCIsXCJBbnRpZ3VhICZhbXA7IEJhcmJ1ZGFcIixcIkFyZ2VudGluYVwiLFwiQXJtZW5pYVwiLFwiQXJ1YmFcIixcIkF1c3RyYWxpYVwiLFwiQXVzdHJpYVwiLFwiQXplcmJhaWphblwiLFwiQmFoYW1hc1wiLFwiQmFocmFpblwiLFwiQmFuZ2xhZGVzaFwiLFwiQmFyYmFkb3NcIixcIkJlbGFydXNcIixcIkJlbGdpdW1cIixcIkJlbGl6ZVwiLFwiQmVuaW5cIixcIkJlcm11ZGFcIixcIkJodXRhblwiLFwiQm9saXZpYVwiLFwiQm9zbmlhICZhbXA7IEhlcnplZ292aW5hXCIsXCJCb3Rzd2FuYVwiLFwiQnJhemlsXCIsXCJCcml0aXNoIFZpcmdpbiBJc2xhbmRzXCIsXCJCcnVuZWlcIixcIkJ1bGdhcmlhXCIsXCJCdXJraW5hIEZhc29cIixcIkJ1cnVuZGlcIixcIkNhbWJvZGlhXCIsXCJDYW1lcm9vblwiLFwiQ2FuYWRhXCIsXCJDYXBlIFZlcmRlXCIsXCJDYXltYW4gSXNsYW5kc1wiLFwiQ2VudHJhbCBBcmZyaWNhbiBSZXB1YmxpY1wiLFwiQ2hhZFwiLFwiQ2hpbGVcIixcIkNoaW5hXCIsXCJDb2xvbWJpYVwiLFwiQ29uZ29cIixcIkNvb2sgSXNsYW5kc1wiLFwiQ29zdGEgUmljYVwiLFwiQ290ZSBEIEl2b2lyZVwiLFwiQ3JvYXRpYVwiLFwiQ3ViYVwiLFwiQ3VyYWNhb1wiLFwiQ3lwcnVzXCIsXCJDemVjaCBSZXB1YmxpY1wiLFwiRGVubWFya1wiLFwiRGppYm91dGlcIixcIkRvbWluaWNhXCIsXCJEb21pbmljYW4gUmVwdWJsaWNcIixcIkVjdWFkb3JcIixcIkVneXB0XCIsXCJFbCBTYWx2YWRvclwiLFwiRXF1YXRvcmlhbCBHdWluZWFcIixcIkVyaXRyZWFcIixcIkVzdG9uaWFcIixcIkV0aGlvcGlhXCIsXCJGYWxrbGFuZCBJc2xhbmRzXCIsXCJGYXJvZSBJc2xhbmRzXCIsXCJGaWppXCIsXCJGaW5sYW5kXCIsXCJGcmFuY2VcIixcIkZyZW5jaCBQb2x5bmVzaWFcIixcIkZyZW5jaCBXZXN0IEluZGllc1wiLFwiR2Fib25cIixcIkdhbWJpYVwiLFwiR2VvcmdpYVwiLFwiR2VybWFueVwiLFwiR2hhbmFcIixcIkdpYnJhbHRhclwiLFwiR3JlZWNlXCIsXCJHcmVlbmxhbmRcIixcIkdyZW5hZGFcIixcIkd1YW1cIixcIkd1YXRlbWFsYVwiLFwiR3Vlcm5zZXlcIixcIkd1aW5lYVwiLFwiR3VpbmVhIEJpc3NhdVwiLFwiR3V5YW5hXCIsXCJIYWl0aVwiLFwiSG9uZHVyYXNcIixcIkhvbmcgS29uZ1wiLFwiSHVuZ2FyeVwiLFwiSWNlbGFuZFwiLFwiSW5kaWFcIixcIkluZG9uZXNpYVwiLFwiSXJhblwiLFwiSXJhcVwiLFwiSXJlbGFuZFwiLFwiSXNsZSBvZiBNYW5cIixcIklzcmFlbFwiLFwiSXRhbHlcIixcIkphbWFpY2FcIixcIkphcGFuXCIsXCJKZXJzZXlcIixcIkpvcmRhblwiLFwiS2F6YWtoc3RhblwiLFwiS2VueWFcIixcIktpcmliYXRpXCIsXCJLb3Nvdm9cIixcIkt1d2FpdFwiLFwiS3lyZ3l6c3RhblwiLFwiTGFvc1wiLFwiTGF0dmlhXCIsXCJMZWJhbm9uXCIsXCJMZXNvdGhvXCIsXCJMaWJlcmlhXCIsXCJMaWJ5YVwiLFwiTGllY2h0ZW5zdGVpblwiLFwiTGl0aHVhbmlhXCIsXCJMdXhlbWJvdXJnXCIsXCJNYWNhdVwiLFwiTWFjZWRvbmlhXCIsXCJNYWRhZ2FzY2FyXCIsXCJNYWxhd2lcIixcIk1hbGF5c2lhXCIsXCJNYWxkaXZlc1wiLFwiTWFsaVwiLFwiTWFsdGFcIixcIk1hcnNoYWxsIElzbGFuZHNcIixcIk1hdXJpdGFuaWFcIixcIk1hdXJpdGl1c1wiLFwiTWV4aWNvXCIsXCJNaWNyb25lc2lhXCIsXCJNb2xkb3ZhXCIsXCJNb25hY29cIixcIk1vbmdvbGlhXCIsXCJNb250ZW5lZ3JvXCIsXCJNb250c2VycmF0XCIsXCJNb3JvY2NvXCIsXCJNb3phbWJpcXVlXCIsXCJNeWFubWFyXCIsXCJOYW1pYmlhXCIsXCJOYXVyb1wiLFwiTmVwYWxcIixcIk5ldGhlcmxhbmRzXCIsXCJOZXRoZXJsYW5kcyBBbnRpbGxlc1wiLFwiTmV3IENhbGVkb25pYVwiLFwiTmV3IFplYWxhbmRcIixcIk5pY2FyYWd1YVwiLFwiTmlnZXJcIixcIk5pZ2VyaWFcIixcIk5vcnRoIEtvcmVhXCIsXCJOb3J3YXlcIixcIk9tYW5cIixcIlBha2lzdGFuXCIsXCJQYWxhdVwiLFwiUGFsZXN0aW5lXCIsXCJQYW5hbWFcIixcIlBhcHVhIE5ldyBHdWluZWFcIixcIlBhcmFndWF5XCIsXCJQZXJ1XCIsXCJQaGlsaXBwaW5lc1wiLFwiUG9sYW5kXCIsXCJQb3J0dWdhbFwiLFwiUHVlcnRvIFJpY29cIixcIlFhdGFyXCIsXCJSZXVuaW9uXCIsXCJSb21hbmlhXCIsXCJSdXNzaWFcIixcIlJ3YW5kYVwiLFwiU2FpbnQgUGllcnJlICZhbXA7IE1pcXVlbG9uXCIsXCJTYW1vYVwiLFwiU2FuIE1hcmlub1wiLFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsXCJTYXVkaSBBcmFiaWFcIixcIlNlbmVnYWxcIixcIlNlcmJpYVwiLFwiU2V5Y2hlbGxlc1wiLFwiU2llcnJhIExlb25lXCIsXCJTaW5nYXBvcmVcIixcIlNsb3Zha2lhXCIsXCJTbG92ZW5pYVwiLFwiU29sb21vbiBJc2xhbmRzXCIsXCJTb21hbGlhXCIsXCJTb3V0aCBBZnJpY2FcIixcIlNvdXRoIEtvcmVhXCIsXCJTb3V0aCBTdWRhblwiLFwiU3BhaW5cIixcIlNyaSBMYW5rYVwiLFwiU3QgS2l0dHMgJmFtcDsgTmV2aXNcIixcIlN0IEx1Y2lhXCIsXCJTdCBWaW5jZW50XCIsXCJTdWRhblwiLFwiU3VyaW5hbWVcIixcIlN3YXppbGFuZFwiLFwiU3dlZGVuXCIsXCJTd2l0emVybGFuZFwiLFwiU3lyaWFcIixcIlRhaXdhblwiLFwiVGFqaWtpc3RhblwiLFwiVGFuemFuaWFcIixcIlRoYWlsYW5kXCIsXCJUaW1vciBMJ0VzdGVcIixcIlRvZ29cIixcIlRvbmdhXCIsXCJUcmluaWRhZCAmYW1wOyBUb2JhZ29cIixcIlR1bmlzaWFcIixcIlR1cmtleVwiLFwiVHVya21lbmlzdGFuXCIsXCJUdXJrcyAmYW1wOyBDYWljb3NcIixcIlR1dmFsdVwiLFwiVWdhbmRhXCIsXCJVa3JhaW5lXCIsXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLFwiVW5pdGVkIEtpbmdkb21cIixcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLFwiVXJ1Z3VheVwiLFwiVXpiZWtpc3RhblwiLFwiVmFudWF0dVwiLFwiVmF0aWNhbiBDaXR5XCIsXCJWZW5lenVlbGFcIixcIlZpZXRuYW1cIixcIlZpcmdpbiBJc2xhbmRzIChVUylcIixcIlllbWVuXCIsXCJaYW1iaWFcIixcIlppbWJhYndlXCJdO1xyXG5cclxuZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGlucCwgYXJyKSB7XHJcbiAgLyp0aGUgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIHRha2VzIHR3byBhcmd1bWVudHMsXHJcbiAgdGhlIHRleHQgZmllbGQgZWxlbWVudCBhbmQgYW4gYXJyYXkgb2YgcG9zc2libGUgYXV0b2NvbXBsZXRlZCB2YWx1ZXM6Ki9cclxuICB2YXIgY3VycmVudEZvY3VzO1xyXG4gIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSB3cml0ZXMgaW4gdGhlIHRleHQgZmllbGQ6Ki9cclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGEsIGIsIGksIHZhbCA9IHRoaXMudmFsdWU7XHJcbiAgICAgIC8qY2xvc2UgYW55IGFscmVhZHkgb3BlbiBsaXN0cyBvZiBhdXRvY29tcGxldGVkIHZhbHVlcyovXHJcbiAgICAgIGNsb3NlQWxsTGlzdHMoKTtcclxuICAgICAgaWYgKCF2YWwpIHsgcmV0dXJuIGZhbHNlO31cclxuICAgICAgY3VycmVudEZvY3VzID0gLTE7XHJcbiAgICAgIC8qY3JlYXRlIGEgRElWIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGl0ZW1zICh2YWx1ZXMpOiovXHJcbiAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBhLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQgKyBcImF1dG9jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgICBhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xyXG4gICAgICAvKmFwcGVuZCB0aGUgRElWIGVsZW1lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYXV0b2NvbXBsZXRlIGNvbnRhaW5lcjoqL1xyXG4gICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgIC8qZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuLi4qL1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLypjaGVjayBpZiB0aGUgaXRlbSBzdGFydHMgd2l0aCB0aGUgc2FtZSBsZXR0ZXJzIGFzIHRoZSB0ZXh0IGZpZWxkIHZhbHVlOiovXHJcbiAgICAgICAgaWYgKGFycltpXS5zdWJzdHIoMCwgdmFsLmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PSB2YWwudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgLypjcmVhdGUgYSBESVYgZWxlbWVudCBmb3IgZWFjaCBtYXRjaGluZyBlbGVtZW50OiovXHJcbiAgICAgICAgICBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgICAgIC8qbWFrZSB0aGUgbWF0Y2hpbmcgbGV0dGVycyBib2xkOiovXHJcbiAgICAgICAgICBiLmlubmVySFRNTCA9IFwiPHN0cm9uZz5cIiArIGFycltpXS5zdWJzdHIoMCwgdmFsLmxlbmd0aCkgKyBcIjwvc3Ryb25nPlwiO1xyXG4gICAgICAgICAgYi5pbm5lckhUTUwgKz0gYXJyW2ldLnN1YnN0cih2YWwubGVuZ3RoKTtcclxuICAgICAgICAgIC8qaW5zZXJ0IGEgaW5wdXQgZmllbGQgdGhhdCB3aWxsIGhvbGQgdGhlIGN1cnJlbnQgYXJyYXkgaXRlbSdzIHZhbHVlOiovXHJcbiAgICAgICAgICBiLmlubmVySFRNTCArPSBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIHZhbHVlPSdcIiArIGFycltpXSArIFwiJz5cIjtcclxuICAgICAgICAgIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3Mgb24gdGhlIGl0ZW0gdmFsdWUgKERJViBlbGVtZW50KToqL1xyXG4gICAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAvKmluc2VydCB0aGUgdmFsdWUgZm9yIHRoZSBhdXRvY29tcGxldGUgdGV4dCBmaWVsZDoqL1xyXG4gICAgICAgICAgICAgIGlucC52YWx1ZSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAvKmNsb3NlIHRoZSBsaXN0IG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzLFxyXG4gICAgICAgICAgICAgIChvciBhbnkgb3RoZXIgb3BlbiBsaXN0cyBvZiBhdXRvY29tcGxldGVkIHZhbHVlczoqL1xyXG4gICAgICAgICAgICAgIGNsb3NlQWxsTGlzdHMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYS5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAvKmV4ZWN1dGUgYSBmdW5jdGlvbiBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZDoqL1xyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIik7XHJcbiAgICAgIGlmICh4KSB4ID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xyXG4gICAgICAgIC8qSWYgdGhlIGFycm93IERPV04ga2V5IGlzIHByZXNzZWQsXHJcbiAgICAgICAgaW5jcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG4gICAgICAgIGN1cnJlbnRGb2N1cysrO1xyXG4gICAgICAgIC8qYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOiovXHJcbiAgICAgICAgYWRkQWN0aXZlKHgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkgeyAvL3VwXHJcbiAgICAgICAgLypJZiB0aGUgYXJyb3cgVVAga2V5IGlzIHByZXNzZWQsXHJcbiAgICAgICAgZGVjcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG4gICAgICAgIGN1cnJlbnRGb2N1cy0tO1xyXG4gICAgICAgIC8qYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOiovXHJcbiAgICAgICAgYWRkQWN0aXZlKHgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgIC8qSWYgdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkLCBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkLCovXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50Rm9jdXMgPiAtMSkge1xyXG4gICAgICAgICAgLyphbmQgc2ltdWxhdGUgYSBjbGljayBvbiB0aGUgXCJhY3RpdmVcIiBpdGVtOiovXHJcbiAgICAgICAgICBpZiAoeCkgeFtjdXJyZW50Rm9jdXNdLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gYWRkQWN0aXZlKHgpIHtcclxuICAgIC8qYSBmdW5jdGlvbiB0byBjbGFzc2lmeSBhbiBpdGVtIGFzIFwiYWN0aXZlXCI6Ki9cclxuICAgIGlmICgheCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgLypzdGFydCBieSByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiBhbGwgaXRlbXM6Ki9cclxuICAgIHJlbW92ZUFjdGl2ZSh4KTtcclxuICAgIGlmIChjdXJyZW50Rm9jdXMgPj0geC5sZW5ndGgpIGN1cnJlbnRGb2N1cyA9IDA7XHJcbiAgICBpZiAoY3VycmVudEZvY3VzIDwgMCkgY3VycmVudEZvY3VzID0gKHgubGVuZ3RoIC0gMSk7XHJcbiAgICAvKmFkZCBjbGFzcyBcImF1dG9jb21wbGV0ZS1hY3RpdmVcIjoqL1xyXG4gICAgeFtjdXJyZW50Rm9jdXNdLmNsYXNzTGlzdC5hZGQoXCJhdXRvY29tcGxldGUtYWN0aXZlXCIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVBY3RpdmUoeCkge1xyXG4gICAgLyphIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgXCJhY3RpdmVcIiBjbGFzcyBmcm9tIGFsbCBhdXRvY29tcGxldGUgaXRlbXM6Ki9cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB4W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRvY29tcGxldGUtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUFsbExpc3RzKGVsbW50KSB7XHJcbiAgICAvKmNsb3NlIGFsbCBhdXRvY29tcGxldGUgbGlzdHMgaW4gdGhlIGRvY3VtZW50LFxyXG4gICAgZXhjZXB0IHRoZSBvbmUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50OiovXHJcbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdXRvY29tcGxldGUtaXRlbXNcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVsbW50ICE9IHhbaV0gJiYgZWxtbnQgIT0gaW5wKSB7XHJcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIGNsaWNrcyBpbiB0aGUgZG9jdW1lbnQ6Ki9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjbG9zZUFsbExpc3RzKGUudGFyZ2V0KTtcclxufSk7XHJcbn0iXSwiZmlsZSI6ImF1dG9jb21wbGV0ZS5qcyJ9
