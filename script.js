function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for(var i = 0; i<6;i++){
                    color +=letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
            var height = ['50px','100px', '125px', '175px', '85px', '30px','60px'];
            
            var borderRadius = ["0","50%","75%"];
            var float = ['left','right'];
            var margin = ["10px","20px","30px","25px 5px 8px 25px", "70px 90px", '30px 150px', '50px 400px'];
            
            var start = new Date().getTime();
            
            document.getElementById("areaForShape").onclick = function () {
                
                var end = new Date().getTime();
                
                var time = (end-start)/1000;
                
                document.getElementById("timeTaken").innerHTML = "<b>" +time +"s</b>";
                
                document.getElementById("areaForShape").style.backgroundColor = getRandomColor();
                
                document.getElementById("areaForShape").style.height = height[Math.floor(Math.random() * height.length)];
                
                var heightWidth = height[Math.floor(Math.random() * height.length)];
                
                document.getElementById("areaForShape").style.height = heightWidth;
                
                document.getElementById("areaForShape").style.width = heightWidth;
                
                document.getElementById("areaForShape").style.borderRadius = borderRadius[Math.floor(Math.random() * borderRadius.length)];
                
                document.getElementById("areaForShape").style.float = float[Math.floor(Math.random() * float.length)];
                
                document.getElementById("areaForShape").style.margin = margin[Math.floor(Math.random() * margin.length)];
                
                start = new Date().getTime();
            }