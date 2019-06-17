// use
var app = (()=>{
    let init=()=> {
        login_form();
    }
    let login_form = ()=>{
        let wrapper = document.querySelector('#wrapper');
        wrapper.innerHTML = '<form action="/action_page.php">'
        +'  First name:<br>'
        +'  <input type="text" id="customerId" name="customerId">'
        +'  <br>'
        +'  Last name:<br>'
        +'  <input type="text" id="password" name="password">'
        +'  <br><br>'
        +'  <input id="login-btn" type="button" value="LOGIN">'
        +'  <input id="join-btn" type="button" value="JOIN">'
        +'</form> ';
        let join_btn = document.querySelector('#join-btn');
        join_btn.addEventListener('click',()=>{
            join_form();
        });
        let login_btn = document.querySelector('#login-btn');
        login_btn.addEventListener('click',(e)=>{
            e.preventDefault();
            alert('로그인 버튼 클릭');
            id = document.getElementById('customerId').value;
            pass = document.getElementById('password').value;
            let xhr = new XMLHttpRequest(),
                method = 'GET',
                url = 'login/'+id+'/'+pass;
            xhr.open(method, url, true);
            xhr.onreadystatechange=()=>{
                if(xhr.readyState=== 4 && xhr.status === 200){
                    let d = xhr.responseText;
                    if(d==='SUCCESS'){
                        let wrapper = document.querySelector('#wrapper');
                        wrapper.innerHTML = '<h1>마이페이지</h1> ';
                    }else{
                        let wrapper = document.querySelector('#wrapper');
                        wrapper.innerHTML = '<form action="/action_page.php">'
                        +'  First name:<br>'
                        +'  <input type="text" id="customerId" name="customerId">'
                        +'  <br>'
                        +'  Last name:<br>'
                        +'  <input type="text" id="password" name="password">'
                        +'  <br><br>'
                        +'  <input id="login-btn" type="button" value="LOGIN">'
                        +'  <input id="join-btn" type="button" value="JOIN">'
                        +'</form> ';
                    }
                    
                }
            };
            xhr.send();
            
        });


        
    }
    
    let count =()=>{
        var xhr = new XMLHttpRequest();
        method = 'GET';
        url= 'count';
        xhr.open(method, url, true);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status === 200){
                alert('성공');
                let wrapper = document.querySelector('#wrapper');
                wrapper.innerHTML = '총 고객수 : <h1>'+xhr.responseText+'</h1>'
            }
        }
        xhr.send();
    }

    let join_form =()=>{
        
        +'	PW<br>'
        +'	<input type="password" name="pw"><br>'
        +'	이름<br>'
        +'	<input type="text" name="name"><br>'
        +'	주민번호<br>'
        +'	<input type="password" name="ssn"><br>'
        +'	전화번호<br>'
        +'	<input type="text" name="phone"><br><br>'
        +'	<input id="btn3" type="submit" value="확인">'
        +'	<input id="btn4" type="reset" value="취소">'
        +'</form>';
    }
    return {init : init};
})();



