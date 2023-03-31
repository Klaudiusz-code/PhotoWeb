import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  photos: {
    allPhotos: [
      {name: 'Lorem ipsum', url: '1.jpg', id: 0, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '3.jpg', id: 1, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '4.jpg', id: 2, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '5.jpg', id: 3, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '6.jpg', id: 4, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '7.jpg', id: 5, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '8.jpg', id: 6, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '9.jpg', id: 7, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '10.jpeg', id: 8, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '11.jpeg', id: 9, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '12.jpeg', id: 10, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '13.jpg', id: 11, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '14.jfif', id: 12, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '15.jpg', id: 13, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '16.png', id: 14, tag: 'corporate'},
      {name: 'Lorem ipsum', url: '17.jpg', id: 15, tag: 'lifestyle'},
      {name: 'Lorem ipsum', url: '18.jpg', id: 16, tag: 'lifestyle'},
      {name: 'Lorem ipsum', url: '19.jpg', id: 17, tag: 'lifestyle'},
      {name: 'Lorem ipsum', url: '20.jpg', id: 18, tag: 'lifestyle'},
    ],
    filteredPhotos: [],
    activeTag: "all",
  },
};

const store = configureStore({
  reducer: (state = initialState, action) => {
    switch (action.type) {
      case "FILTER_PHOTOS":
        return {
          photos: {
            allPhotos: state.photos.allPhotos,
            filteredPhotos: action.payload === "all" ? state.photos.allPhotos : state.photos.allPhotos.filter((photo) => photo.tag === action.payload),
            activeTag: action.payload,
          },
        };
      default:
        return state;
    }
  },
});

export default store;
