let bgPage=document.getElementById("bgPage");
backgroundPage();
function changeClassName(){
    let currentPage = location.pathname.split('/').pop();
    let pageName = currentPage.slice(0, -5).toUpperCase();
return pageName;
}   
function backgroundPage(){
   let pageName= changeClassName();
    bgPage.innerHTML=`
    <div class="bg--gray position-overflow">
<div class="box-transform__content section-padding-100">
    <div class="container">
        <h1 class="page__title">${pageName}</h1>
        <div class="page__line"></div>
    </div>  
    <div class="bg--page box-transform"></div>
</div>
<ul class="page__breadcrumbs">
    <li class="home--style"><a href="index.html" >home</a></li>
    <li><a href="#" class="active">${pageName}</a></li>
   
</ul>
</div>
`
}