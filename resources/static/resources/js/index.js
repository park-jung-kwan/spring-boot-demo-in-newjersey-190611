var app = (function(){
    let init=function(){
        login_form();
    }
    let login_form = function(){
        var wrapper = document.querySelector('#wrapper');
        wrapper.innerHTML = '<form action="/action_page.php">'
        +'  First name:<br>'
        +'  <input type="text" name="firstname" value="Mickey">'
        +'  <br>'
        +'  Last name:<br>'
        +'  <input type="text" name="lastname" value="Mouse">'
        +'  <br><br>'
        +'  <input type="submit" value="Submit">'
        +'</form> ';
        
        var btn = document.querySelector('#btn');
        var target = document.getElementById('target');
        btn.addEventListener('click',function(){
            target.innerHTML = '';
        });
        var btn2 = document.querySelector('#btn2');
        
        btn2.addEventListener('click', function(){
            var temp = document.createTextNode('새로 추가됨');
            target.appendChild(temp);
        });
    }
    return {init : init};
})();


