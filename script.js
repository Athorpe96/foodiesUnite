////////////////////////////////////////////////////////////////////
// deezmond's section
// 
//
//
// 
// 
/////////////////////////////////////////////////////////////////////
// coop's section
// 


// function that runs upon clicking a foodPreference checkbox
// function takes the boxVal of the checkbox clicked and either adds or removes it
$("#checkbox").on("click", function (boxVal) {
    $.ajax({
        url: `https://api.edamam.com/search?q=${boxVal}&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db`,
        method: "GET"
    })
    console.log()
})


// 
//


//
//
//
////////////////////////////////////////////////////////////////////
// justin's section
//
//
//
//
//
//
/////////////////////////////////////////////////////////////////////
// austin's section
//
//
//
//
//
////////////////////////////////////////////////////////////////////



















// https://www.programmableweb.com/news/10-most-popular-food-apis/brief/2019/08/06