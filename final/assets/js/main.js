/**
 * Template Name: OnePage - v4.1.0
 * Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */


let
  // 列出所有選項的id
  // 第一題
  outdoor = document.getElementById('outdoor');
indoor = document.getElementById('indoor');
// 第二題
milk = document.getElementById('milk');
waffle = document.getElementById('waffle');
meat = document.getElementById('meat');
// 第3題
strongdog = document.getElementById('strongdog');
crydog = document.getElementById('crydog');
// 第4題
staydorm = document.getElementById('staydorm');
staylibrary = document.getElementById('staylibrary');
stayout = document.getElementById('stayout');
// 第5題
fphone = document.getElementById('fphone');
fteeth = document.getElementById('fteeth');
fface = document.getElementById('fface');
// 第6題
iart = document.getElementById('iart');
iscience = document.getElementById('iscience');
// 第7題
dboba = document.getElementById('dboba');
dmango = document.getElementById('dmango');
dcola = document.getElementById('dcola');
// 第8題
moonlake = document.getElementById('moonlake');
ntulib = document.getElementById('ntulib');
palmbv = document.getElementById('palmbv');

food = document.getElementsByClassName('food');
memberinfo = document.getElementsByClassName('member-info');

// 建立各題sum
firstsum = 0;
secondsum = 0;
thirdsum = 0;
fourthsum = 0;
fifthsum = 0;
sixthsum = 0;
seventhsum = 0;
eighthsum = 0;
sum = 0;

// 建立各選項值
outdoor.addEventListener('click',
  addValue1
);
indoor.addEventListener('click',
  addValue1
);

milk.addEventListener('click',
  addValue2
);
waffle.addEventListener('click',
  addValue2
);
meat.addEventListener('click',
  addValue2
);

strongdog.addEventListener('click',
  addValue3
);
crydog.addEventListener('click',
  addValue3
);

staydorm.addEventListener('click',
  addValue4
);
staylibrary.addEventListener('click',
  addValue4
);
stayout.addEventListener('click',
  addValue4
);

fphone.addEventListener('click',
  addValue5
);
fteeth.addEventListener('click',
  addValue5
);
fface.addEventListener('click',
  addValue5
);

iart.addEventListener('click',
  addValue6
);
iscience.addEventListener('click',
  addValue6
);

dboba.addEventListener('click',
  addValue7
);
dmango.addEventListener('click',
  addValue7
);
dcola.addEventListener('click',
  addValue7
);

moonlake.addEventListener('click',
  addValue8
);
ntulib.addEventListener('click',
  addValue8
);
palmbv.addEventListener('click',
  addValue8
);

function addValue1(event) {
  firstsum = event.target.getAttribute('value') ||
    event.target.parentNode.getAttribute('value');

  console.log(firstsum);

  let firstQButton = document.getElementsByClassName('firstQButton'); // [div1, div2]

  for (let btn of firstQButton) {
    btn.style.backgroundColor = 'white'; //div2
  }

  let target;
  if (event.target.getAttribute('value')) {
    target = event.target;
  } else {
    target = event.target.parentNode;
  }

  target.style.backgroundColor = '#85c6f5';

}

function addValue2(event) {
  secondsum = event.target.getAttribute('value') ||
    event.target.parentNode.getAttribute('value');

  console.log(secondsum);

  let secondQButton = document.getElementsByClassName('secondQButton'); 

  for (let btn of secondQButton) {
    btn.style.backgroundColor = 'white'; 
  }

  let target;
  if (event.target.getAttribute('value')) {
    target = event.target;
  } else {
    target = event.target.parentNode;
  }

  target.style.backgroundColor = '#85c6f5';

}

function addValue3(event) {
  thirdsum = event.target.getAttribute('value') ||
    event.target.parentNode.getAttribute('value');

    let thirdQButton = document.getElementsByClassName('thirdQButton'); // [div1, div2]

    for (let btn of thirdQButton) {
      btn.style.backgroundColor = 'white'; //div2
    }
  
    let target;
    if (event.target.getAttribute('value')) {
      target = event.target;
    } else {
      target = event.target.parentNode;
    }
  
    target.style.backgroundColor = '#85c6f5';
}

function addValue4(event) {
  fourthsum = event.target.getAttribute('value') ||
    event.target.parentNode.getAttribute('value');

    let fourthQButton = document.getElementsByClassName('fourthQButton'); // [div1, div2]

    for (let btn of fourthQButton) {
      btn.style.backgroundColor = 'white'; //div2
    }
  
    let target;
    if (event.target.getAttribute('value')) {
      target = event.target;
    } else {
      target = event.target.parentNode;
    }
  
    target.style.backgroundColor = '#85c6f5';
}

function addValue5(event) {
  fifthsum = event.target.getAttribute('value') ||
    event.target.parentNode.getAttribute('value');

    let fifthQButton = document.getElementsByClassName('fifthQButton'); // [div1, div2]

    for (let btn of fifthQButton) {
      btn.style.backgroundColor = 'white'; //div2
    }
  
    let target;
    if (event.target.getAttribute('value')) {
      target = event.target;
    } else {
      target = event.target.parentNode;
    }
  
    target.style.backgroundColor = '#85c6f5';
}

function addValue6(event) {
  sixthsum = event.target.getAttribute('value') ||
    event.target.parentNode.getAttribute('value');

    let sixthQButton = document.getElementsByClassName('sixthQButton'); // [div1, div2]

    for (let btn of sixthQButton) {
      btn.style.backgroundColor = 'white'; //div2
    }
  
    let target;
    if (event.target.getAttribute('value')) {
      target = event.target;
    } else {
      target = event.target.parentNode;
    }
  
    target.style.backgroundColor = '#85c6f5';
}

function addValue7(event) {
  seventhsum = event.target.getAttribute('value') ||
    event.target.parentNode.getAttribute('value');

    let seventhQButton = document.getElementsByClassName('seventhQButton'); // [div1, div2]

    for (let btn of seventhQButton) {
      btn.style.backgroundColor = 'white'; //div2
    }
  
    let target;
    if (event.target.getAttribute('value')) {
      target = event.target;
    } else {
      target = event.target.parentNode;
    }
  
    target.style.backgroundColor = '#85c6f5';
}

function addValue8(event) {
  eighthsum = event.target.getAttribute('value')||
    event.target.parentNode.getAttribute('value');

    let eighthQButton = document.getElementsByClassName('eighthQButton'); // [div1, div2]

    for (let btn of eighthQButton) {
      btn.style.backgroundColor = 'white'; //div2
    }
  
    let target;
    if (event.target.getAttribute('value')) {
      target = event.target;
    } else {
      target = event.target.parentNode;
    }
  
    target.style.backgroundColor = '#85c6f5';
}
// 計算sum
function addValue(event) {
  console.log(event.target);

  firstsum = event.target.getAttribute('value');
  secondsum = event.target.getAttribute('value');
  thirdsum = event.target.getAttribute('value');
  fourthsum = event.target.getAttribute('value');
  fifthsum = event.target.getAttribute('value');
  sixthsum = event.target.getAttribute('value');
  seventhsum = event.target.getAttribute('value');
  eighthsum = event.target.getAttribute('value');

  sum = sum + parseInt(event.target.getAttribute('value'))
}

answerBotton.addEventListener('click',showanimal );

// 呈現方式
function showanimal(id) {
  var fish = document.getElementById('fish');
  var ntucustomer = document.getElementById('ntucustomer');
  var goodboy = document.getElementById('goodboy');
  var goose = document.getElementById('goose');
  var stupidbird = document.getElementById('stupidbird');
  var squirrel = document.getElementById('squirrel');
  var sparrow = document.getElementById('sparrow');
  var monkey = document.getElementById('monkey');

  // firstsum = event.target.getAttribute('value');
  // secondsum = event.target.getAttribute('value');
  // thirdsum = event.target.getAttribute('value');
  // fourthsum = event.target.getAttribute('value');
  // fifthsum = event.target.getAttribute('value');
  // sixthsum = event.target.getAttribute('value');
  // seventhsum = event.target.getAttribute('value');
  // eighthsum = event.target.getAttribute('value');

  sum = parseInt(firstsum) + 
    parseInt(secondsum) + 
    parseInt(thirdsum) + 
    parseInt(fourthsum) + 
    parseInt(fifthsum) + 
    parseInt(sixthsum) + 
    parseInt(seventhsum) + 
    parseInt(eighthsum);
  
  console.log(sum);

  if (sum <= 13) {
    fish.style.display = 'block';
  } else if (sum >= 13 && sum <= 16) {
    ntucustomer.style.display = 'block';
  } else if (sum >= 17 && sum <= 20) {
    goodboy.style.display = 'block';
  } else if (sum >= 21 && sum <= 24) {
    goose.style.display = 'block';
  } else if (sum >= 25 && sum <= 28) {
    stupidbird.style.display = 'block';
  } else if (sum >= 29 && sum <= 32) {
    squirrel.style.display = 'block';
  } else if (sum >= 33 && sum <= 36) {
    sparrow.style.display = 'block';
  } else {
    monkey.style.display = 'block'
  }
}

// 再玩一次
reStart = document.getElementById('reStart');
reStart.addEventListener('click', function (re) {
  firstsum = 0;
  secondsum = 0;
  thirdsum = 0;
  fourthsum = 0;
  fifthsum = 0;
  sixthsum = 0;
  seventhsum = 0;
  eighthsum = 0;
  sum = 0;

  fish.style.display = 'none';
  ntucustomer.style.display = 'none';
  goodboy.style.display = 'none';
  goose.style.display = 'none';
  stupidbird.style.display = 'none';
  squirrel.style.display = 'none';
  sparrow.style.display = 'none';
  monkey.style.display = 'none';
 
});


(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()