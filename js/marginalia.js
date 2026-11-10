// Marginalia: click sul sigillo "L" apre il meme in un foglietto
(function(){
  var dlg=document.createElement('dialog');
  dlg.className='foglietto';
  dlg.innerHTML='<button type="button" class="chiudi" aria-label="Chiudi">×</button><img alt=""><p></p>';
  document.body.appendChild(dlg);
  var img=dlg.querySelector('img'),cap=dlg.querySelector('p');
  document.addEventListener('click',function(e){
    var b=e.target.closest('.sigillo');
    if(!b)return;
    img.src=b.dataset.img;img.alt=b.dataset.alt||'';
    cap.textContent='Dai margini del diario di Logan · '+(b.dataset.cap||'');
    dlg.showModal();
  });
  dlg.addEventListener('click',function(e){
    if(e.target===dlg||e.target.classList.contains('chiudi'))dlg.close();
  });
})();
