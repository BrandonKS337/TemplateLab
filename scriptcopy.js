const data = [
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
];

const artists = [
  //second array set up to do part 3
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
        alt: "selfie"
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        alt: "scream"
      }
    ],

  },
];
///original work we did for placehodlder cards///
// function addCard(card) {
//   //need to "paramaterize our function" aka pass through something. card
//   const template = document
//     .getElementById("card-template")
//     .content.cloneNode(true);
//   // console.log(document.getElementById("card-list"))                                   //trying to query the html for info during live server view
//   template.querySelector(".card-title").innerText = card.title;
//   template.querySelector(".card-text").innerText = card.content;
//   template.querySelector(".card-img").src = card.URL;
//   // template.querySelector('.card-alt').alt = card.alt;

//   document.querySelector("#card-list").appendChild(template);
// }

/////doing van gogh portion ///
function addCard(item) {  //need to "paramaterize our function" aka pass through something. card
    const artist = document.getElementById("artist-portfolio").content.cloneNode(true);
    console.log(artist)
    artist.querySelector('.artist-name').innerText = item.name
    document.querySelector("#artist-list").appendChild(artist);
    item.portfolio.map((itemPortfolio) => {
      const template = document.getElementById("card-template").content.cloneNode(true);
      console.log(document.getElementById("card-list"))
      template.querySelector(".card-title").innerText = itemPortfolio.title;           //removed item.content line query selection. didnt have content to query
      template.querySelector(".card-img").src = itemPortfolio.url;      //changed to itemportfoli at 1201 because relating to wrong item when calling originally
      template.querySelector(".card-img").alt = itemPortfolio.alt;

      document.querySelector("#card-list").appendChild(template);
    })

  
  }


if ("content" in document.createElement("template")) {
  //need to map over data set so included map function in if statement
//   data.map((card) => {
    //arrow function to map over the input card information
    // addCard(card); //passing through our card funcation
//   });
artists.map((item) => {
    addCard(item)
})
}

// const data = [{name: 'bob', age: 23}, {name: 'alice', age: 39}]
