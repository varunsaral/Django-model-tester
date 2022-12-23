//getting all links
all_links = document.links

all_link_array = []
//taking out urls from links
for(let index = 13;index<all_links.length;++index){
    all_link_array.push(all_links[index].href)
}

//dividing the array into chunks of 10
var size = 10; var arrayOfArrays = [];
for (var i=0; i<all_link_array.length; i+=size) {
     arrayOfArrays.push(all_link_array.slice(i,i+size));
}

//opening the links in new tabs change the index to open different links
innerindex = 0
for(let index = 0 ;index < arrayOfArrays[innexindex].length;++index){
    window.open(arrayOfArrays[innerindex][index],'_blank').focus();
}
innerindex++;
