const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

// Unsplash API
const count = 10
const apiKey = 'Y3rNCqlocerYqeHBI9G4rphMDAoCYVSAKo_BZ0v22gw'
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
const apiUrl = './sample-data.json'

// Helper function to set DOM element attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create elements for links and photos, add to DOM
function displayPhotos() {
    photosArray.forEach(photo => {
        const item = document.createElement('a')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

// Get photos from Unsplach API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch (error) {

    }
}

// On Load
getPhotos()