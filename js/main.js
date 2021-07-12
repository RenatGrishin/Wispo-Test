$(function(){
  $('.buttonInfo').on('click', (e)=>{getTitleInfo(e)});
  $(document).on('mouseup', closeTextInfo);
  $('.arrowSpoiler').on('click', showSpoiler);

  $('.mySelectForm').on('click', selectList);
  $('.selectList li').on('click', selectItem);
})

//Выпадающий список
function selectList(e) {
  let target = $(e.target);
  target.parent().children('ul.selectList').toggle()

  target.toggleClass('openList');
}
function selectItem(e) {
  let target = $(e.target);
  target.parent().prev().toggleClass('openList');
  target.parent().prev().text(target.text());
  target.parent().parent().children('input.selectInput').val(target.text());
  target.parent().toggle();
}

// Текст с информацией
function getTitleInfo(e){
  let target = e.target;
}
function closeTextInfo(e) {
  let wind = $('.titleInfoWindow');
  let selList = $('.selectList');
  if( !wind.is(e.target) && wind.has(e.target).length === 0 ) wind.hide();
}

// Спойлер
function showSpoiler(e){
  let target = $(e.target);
  let elementParent = target.parent().parent();

  target.toggleClass('openList')

  if ( elementParent.children('div.pColInfo').length > 0 ) target.parent().parent().children('div.pColInfo').toggle();
  if ( elementParent.children('div.pMultiLine').length > 0 ) target.parent().parent().children('div.pMultiLine').toggle();
}

function getTitleInfo(e){
  let target = $(e.target);
  let elementChildren = target.children('span.titleInfoWindow');
  elementChildren.css(`left`,`-${elementChildren.width() / 2 -10}px`)
  elementChildren.css(`top`,`-${elementChildren.height()}px`)
  elementChildren.toggle();
}