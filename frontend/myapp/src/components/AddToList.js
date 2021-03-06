export default function AddToList(id, title, image) {
  // get existing list from local storage or create empty array
  var idlist = JSON.parse(localStorage.getItem("ids")) || [];
  var titlelist = JSON.parse(localStorage.getItem("titles")) || [];
  var imagelist = JSON.parse(localStorage.getItem("images")) || [];

  let filmAlreadyOnList = false;

  // loop to prevent adding same film to the watchlist twice
  // by comparing the ids
  for (let i = 0; i < idlist.length; i++) {
    if (idlist[i] === id) {
      filmAlreadyOnList = true;
      console.log(filmAlreadyOnList);
    }
  }
  // if there is no match, film is pushed to list
  if (!filmAlreadyOnList) {
    idlist.push(id);
    titlelist.push(title);
    imagelist.push(image);
  }
  // send the lists back to storage either changed or unchanged
  localStorage.setItem("ids", JSON.stringify(idlist));
  localStorage.setItem("titles", JSON.stringify(titlelist));
  localStorage.setItem("images", JSON.stringify(imagelist));
  console.log("Added to list");
}
