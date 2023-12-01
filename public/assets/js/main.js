console.log( '%ctest this', "background: hotpink; font-size: 20px; color: green;");

// XHR
//const xhr = new XMLHttpRequest();
//xhr.open( 'GET', '../data/content.json');
//xhr.open( 'Get', '/assets/data/content.json' );
//xhr.send();

//xhr.addEventListener( 'load' , function(){
//    try{
//        console.log( this.responseText);
//        console.log(JSON.parse( this.responseText ) );
//    }catch( console ) {
//            console.warn( ` 😒Nope: ${error}` );
//   }
//});


//fetch
//fetch( '/assets/data/content.json')
//    .then( response => response.json() )
//    .then( data => console.log( data ) )
//    .catch( error => console.warn (` 😒Nope: ${error}` ) );



//async/await
async function weqr(){
    try {
        const sky = await fetch( '/assets/data/content.json' );
        //console.log ( sky );
        const foobar = await sky.json();
        console.log( foobar );
        console.log( foobar.siteName );

        //put siteName on the web page
        const heading = document.querySelector( 'h1');
        heading.innerHTML = foobar.siteName;

        // <li><a href="">something</a></li>
        // get 'nav ul' in a variable
        var nav_holder = document.querySelector( 'hnav ul');
    
        //loop through json array for the main nav
        console.log( foobar.mainNav);
        foobar.mainNav.forEach( menu_item => {
            console.log( menu_item );
            //create a new li
            var list_item = document.createElement( 'li' );

            //add a link to the new li (item)
            //https://stackoverflow.com/a/4772817
            //list_item.innetHTML = "something";
            list_item.innerHTML = `<a href="${menu_item.url}">${menu_item.text}</a>`;
            //list_item.innerHTML = '<a href="' +menu_item.url + '">' + menu_item.text + '</a>';
           

            //add the new list item to the main nav holder 'nav ul'
            nav_holder.appendChild( list_item) ;
        });


    } catch ( error) {
        console.warn( ` 😒Nope: ${error}` );

        
    }
    
}
weqr();
