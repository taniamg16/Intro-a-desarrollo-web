function addArtistResponse(container, data) {
  const card = document.createElement("div");
  card.className = "card text-center mb-4 bg-dark text-light border-success";
  card.style.width = "20rem"; //tamaño de tarjeta

  const img = document.createElement("img");
  img.src = data.images[0]?.url || "";
  img.alt = `Artist photo of ${data.name}`; //texto alterno
  img.className = "card-img-top";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.name; //título con el nombre del artista

  const followers = document.createElement("p");
  followers.className = "card-text";
  const followersFmt = new Intl.NumberFormat("es-MX").format(data.followers?.total ?? 0);
  followers.innerHTML = `<strong>Seguidores:</strong> ${followersFmt}`;

  const popularity = document.createElement("p");
    popularity.className = "card-text";
    popularity.innerHTML = `<strong>Popularidad:</strong> ${data.popularity}%`;
    cardBody.appendChild(popularity);

  cardBody.append(title, followers, popularity);
  card.append(img, cardBody);
  container.appendChild(card);
}


async function ejecutaFuncion() {
  const token = document.getElementById("token").value.trim(); 
  const artistId = document.getElementById("artist-id").value.trim();

  const container = document.getElementById("artist-info");
  container.innerHTML = "<p>Hola</p><p>Mundo</p>";

  const parrafo = document.createElement("p");
  parrafo.textContent = "Loading...";
  container.appendChild(parrafo);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/" + artistId,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    container.innerHTML = ""; // Clear loading
    addArtistResponse(container, data); // -> elegí usar el DOM
    // addHTMLAlbumResponse(container, data); // -> usando innerHTML
  } catch (err) {
    container.innerHTML = "";
    const error = document.createElement("p");
    error.textContent = err.message;
    error.style.color = "red";
    container.appendChild(error);
  }
}

//-------------------------------------------------------------------------------
// Purpose: Fetch and display Spotify track information using Spotify Web API
document.getElementById("fetch-btn").addEventListener("click", ejecutaFuncion);