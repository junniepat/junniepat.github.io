// new Intersection API Lazy load

const options = {
    lazyParentClass: '.lazy-loadImages--item',
    lazyItemClass: 'img'
  }
  
  const lazyLoadParents = document.querySelectorAll(options.lazyParentClass)
  
  const ImageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.map(entry => {
      if (!entry.isIntersecting) return false
      const img = entry.target.querySelector(options.lazyItemClass)
  
      if (img) {
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset
          img.removeAttribute('data-srcset')
        }
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute('data-src')
        }
        // css faded in
        img.onload = () => img.classList.add('loaded')
      }
      else {
        imgObserver.unobserve(img)
      }
    })
  })
  
  lazyLoadParents.forEach(image => {
    ImageObserver.observe(image)
  })
  
  