
const items = document.querySelectorAll('#list-items .item');
items.forEach(item=>{
  item.addEventListener('click',()=>{
    items.forEach(i=>i.classList.remove('active'));
    item.classList.add('active')

  });

});
const heart = document.querySelector('.coeur');
heart.style.cursor = 'pointer';
heart.style.transition = 'all 0.3s';
heart.style.color = 'blue';
function font() {
  if (heart.classList.contains('bi-heart')) {
    heart.classList.remove('bi-heart');
    heart.classList.add('bi-heart-fill');
  } else {
    heart.classList.remove('bi-heart-fill');
    heart.classList.add('bi-heart');
  }
}


const observer = new IntersectionObserver(i => {
  i.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

