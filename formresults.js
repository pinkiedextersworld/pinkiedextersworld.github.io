                   var formData = location.search;
                   formData = formData.substring(1, formData.length);
                   while (formData.indexOf("+") !== -1) {
                       formData = formData.replace("+", " ");
                   }
                   formData = decodeURIComponent(formData);
                   var formArray = formData.split("&");
                   for (var i = 0; i < formArray.length; i = i + 1) {
                       document.write("<p>" + formArray[i] + "</p>");
                   }