import React from 'react';

const Gallery = () => {

    const galleryImg = [
        {name:'Lorem ipsum',url:'1.jpg',id:'23'},
        {name:'Lorem ipsum',url:'3.jpg',id:'23'},
        {name:'Lorem ipsum',url:'4.jpg',id:'23'},
        {name:'Lorem ipsum',url:'5.jpg',id:'23'},
        {name:'Lorem ipsum',url:'6.jpg',id:'23'},
        {name:'Lorem ipsum',url:'7.jpg',id:'23'},
        {name:'Lorem ipsum',url:'8.jpg',id:'23'},
        {name:'Lorem ipsum',url:'9.jpg',id:'23'},
        {name:'Lorem ipsum',url:'10.jpeg',id:'23'},
        {name:'Lorem ipsum',url:'11.jpeg',id:'23'},
        {name:'Lorem ipsum',url:'12.jpeg',id:'23'},
        {name:'Lorem ipsum',url:'13.jpg',id:'23'},
        {name:'Lorem ipsum',url:'14.jfif',id:'23'},
        {name:'Lorem ipsum',url:'15.jpg',id:'23'},
        {name:'Lorem ipsum',url:'16.png',id:'23'},
        {name:'Lorem ipsum',url:'17.jpg',id:'23'},
        {name:'Lorem ipsum',url:'18.jpg',id:'23'},
        {name:'Lorem ipsum',url:'19.jpg',id:'23'},
        {name:'Lorem ipsum',url:'20.jpg',id:'23'},
    ];


    return (
        <div className="container lg:columns-3 gap-10 md:columns-2 sm:columns-1 mx-auto space-y-10 pb-28">
            {galleryImg.map((img) =>{
             return(
                 <div className="bg-gray-200 break-inside-avoid">
                     <img src={img.url} alt={img.name}/>
                 </div>
             )
            })}
        </div>
    );
};

export default Gallery;
