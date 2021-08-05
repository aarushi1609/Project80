var guest_list = []

function submit() {

        var guests = document.getElementById("people-input").value;
        guest_list.push(guests);
        document.getElementById("in-line-names").innerHTML = guest_list;
        console.log(guest_list);

}

function show() {

        var inlist=[];
   

    for(k=0; k<guest_list.length; k++){
        inlist.push("<h4>"+ guest_list[k] + "</h4>");
    }
    var inlist_output= inlist.join(" ");
    document.getElementById("in-list-names").innerHTML = inlist_output;
}

function sorted() {

        guest_list.sort();
        var inlist=[];
   

        for(k=0; k<guest_list.length; k++){
            inlist.push("<h4>"+ guest_list[k] + "</h4>");
        }
        var inlist_output= inlist.join(" ");
        document.getElementById("in-list-sorted-names").innerHTML = inlist_output;

}

function search() {

        var searchednames = 0
        var name = document.getElementById("search-input").value;
        for(j=0; j<guest_list.length; j++){
                if(name==guest_list[j]) {
                       searchednames++ ;
                }
        }

        document.getElementById("name-found-text").innerHTML = "The name was found " + searchednames + " times";
}