var app =  {
        $wrapper :  $wrapper = document.querySelector('#wrapper'),
        init : init
}; 
var customer = {
    join_form : join_form,
    join : join,
    login_form : login_form,
    login : login,
    mypage : mypage,
    count : count,
    update : update,
    remove : remove
};
function init(){
    $wrapper.innerHTML = customer.login_form();
    document.querySelector('#join-btn')
        .addEventListener('click',()=>{
            $wrapper.innerHTML = customer.join_form();
            document.getElementById('confirm-btn')
            .addEventListener('click', e=>{
                e.preventDefault();
                customer.join();
        });
    });
    document.querySelector('#login-btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            customer.login();
    });
}
function join_form(){
    return '<form>'
    +'아이디<br>'
    +'	<input type="text" id="customerId" name="customerId"><br>'
    +'비밀번호<br>'
    +'	<input type="password" id="password" name="password"><br>'
    +'이 름<br>'
    +'	<input type="text" id="customerName" name="customerName"><br>'
    +'주민번호<br>'
    +'	<input type="text" id="ssn" name="ssn"><br>'
    +'전화번호<br>'
    +'	<input type="text" id="phone" name="phone"><br>'
    +'도 시<br>'
    +'	<input type="text" id="city" name="city"><br>'
    +'주 소<br>'
    +'	<input type="text" id="address" name="address"><br>'
    +'우편번호<br>'
    +'	<input type="text" id="postalcode" name="postalcode"><br>'
    +'<br><br>'
    +'	<input id="confirm-btn" type="submit" value="확인">'
    +'	<input id="cancel-btn" type="reset" value="취소">'
    +'</form>';
}
function join(){
    let xhr = new XMLHttpRequest();
    let data = {
        customerId : document.getElementById('customerId').value, 
        customerName : document.getElementById('customerName').value,
        password : document.getElementById('password').value
    };
    xhr.open('POST','customers',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
    xhr.onload=()=>{
        if(xhr.readyState==4 & xhr.status==200){
            let d = JSON.parse(xhr.responseText);
            if(d.result==='SUCCESS'){
                alert('회원가입 성공 :'+d.result);
                //  로그인 폼...
            }else{
                alert('회원가입 실패');
            }
        }else{
            alert('AJAX 실패');
        }
    };
    xhr.send(JSON.stringify(data));
}

function login_form(){
    return '<form>'
    +'  아이디:<br>'
    +'  <input type="text" id="customerId" name="customerId">'
    +'  <br>'
    +'  비밀번호:<br>'
    +'  <input type="text" id="password" name="password">'
    +'  <br><br>'
    +'  <input id="login-btn" type="button" value="LOGIN">'
    +'  <input id="join-btn" type="button" value="JOIN">'
    +'</form> ';
}
function login(){
    id = document.getElementById('customerId').value;
    pass = document.getElementById('password').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers/'+id+'/'+pass, true);
    xhr.onload=()=>{
        if(xhr.readyState=== 4 && xhr.status === 200){
            let d = JSON.parse(xhr.responseText);
            alert('로그인 성공 후 이름:'+d.customerName)
            if(d){
                $wrapper.innerHTML = customer.mypage(d);
            }else{
                $wrapper.innerHTML = customer.login_form();
            }
            
        }
    };
    xhr.send();
}

function mypage(x){
    let customer = x;
    alert('마이페이지로 넘어온 객체명 :'+customer.customerName)
    return '<h1>마이페이지</h1> ';
}
function count(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'count', true);
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            alert('성공');
            let wrapper = document.querySelector('#wrapper');
            wrapper.innerHTML = '총 고객수 : <h1>'+xhr.responseText+'</h1>'
        }
    }
    xhr.send();
}
function update(){
    let customerId = document.getElementById('customerId');
    let xhr = new XMLHttpRequest();
    xhr.open('update','customers/'+customerId,true);
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            alert('성공');
            let wrapper = document.querySelector('#wrapper');
            wrapper.innerHTML = '총 고객수 : <h1>'+xhr.responseText+'</h1>'
        }
    };
    xhr.send();
}
function remove(){
    let customerId = document.getElementById('customerId');
    let xhr = new XMLHttpRequest();
    xhr.open('delete','customers/'+customerId,true);
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            alert('성공');
            let wrapper = document.querySelector('#wrapper');
            wrapper.innerHTML = '총 고객수 : <h1>'+xhr.responseText+'</h1>'
        }
    };
    xhr.send();
}

