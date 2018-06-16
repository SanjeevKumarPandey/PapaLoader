    $(document).ready(function(){
        $("#submitbutton").click(function(){
            var myfile = $("#csvfile")[0].files[0];
            var json = Papa.parse(myfile, 
                {
                header: true, 
                skipEmptyLines: true,
                complete: function(results) {
					var _data = JSON.stringify(results.data);
					try {
					var obj = JSON.parse(_data); // parsing string into JSON 
					var _LDAP, i, j, res, f, email;	
					for(i=0; i<obj.length; i++){
					 f = JSON.stringify(obj[i]);
					 j = obj[i].LDAP;
					 h = JSON.stringify(j);
					 email = h+':'+f;
					 document.getElementById('textbox').innerHTML += email+',';
					}

					var textFile = null,
  					makeTextFile = function (text) {
    				var data = new Blob([text], {type: 'text/plain'});

    				// while replacing a previously generated file, manually revoking the object-URL to avoid memory leaks.
    				if (textFile !== null) {
      				window.URL.revokeObjectURL(textFile);
    				}

    				textFile = window.URL.createObjectURL(data);

    				// returns a URL to be used as a href
    				return textFile;
  					};

					var create = document.getElementById('create'),
    				textbox = document.getElementById('textbox');

  					create.addEventListener('click', function () {
    				var link = document.createElement('a');
    				link.setAttribute('download', 'jsonData.json');
    				link.href = makeTextFile(textbox.value);
    				document.body.appendChild(link);

    				// wait for the link to be added to the document
    				window.requestAnimationFrame(function () {
      				var event = new MouseEvent('click');
      				link.dispatchEvent(event);
      				document.body.removeChild(link);
    				});

  					}, false);

					} catch (ex) {
					console.error(ex);
					}
                }
				
            });
			
        });
		
    });


    function move() {
        var elem = document.getElementById("myBar");   
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
          }
        }
        }