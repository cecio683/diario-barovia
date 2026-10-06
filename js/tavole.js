(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rng(seed){let s=seed>>>0||1;return()=>((s=Math.imul(s^s>>>15,1|s)+0x6D2B79F5|0,(s^s>>>13)>>>0)/4294967296)}
  function sky(c,w,h,top,bot){const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,top);g.addColorStop(1,bot);c.fillStyle=g;c.fillRect(0,0,w,h)}
  function moon(c,x,y,r,a){const g=c.createRadialGradient(x,y,r*.2,x,y,r*4);g.addColorStop(0,`rgba(230,220,200,${.28*a})`);g.addColorStop(1,'rgba(230,220,200,0)');c.fillStyle=g;c.fillRect(x-r*4,y-r*4,r*8,r*8);c.fillStyle=`rgba(232,224,206,${a})`;c.beginPath();c.arc(x,y,r,0,7);c.fill()}
  function fog(c,w,h,R,y0,n,alpha){for(let i=0;i<n;i++){const x=R()*w,y=y0+R()*(h-y0),r=w*(.12+R()*.22);const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(170,165,175,${alpha})`);g.addColorStop(1,'rgba(170,165,175,0)');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2)}}
  function win(c,x,y,w,h,lit){c.fillStyle=lit?'#d9a75a':'#1a171c';c.fillRect(x,y,w,h);if(lit){c.fillStyle='rgba(217,167,90,.18)';c.fillRect(x-w*.6,y-h*.4,w*2.2,h*1.8)}}
  function house(c,x,base,W,H,R,litP){
    c.fillStyle='#0b0a0d';
    c.beginPath();c.moveTo(x,base);c.lineTo(x,base-H);c.lineTo(x+W/2,base-H-W*.55);c.lineTo(x+W,base-H);c.lineTo(x+W,base);c.fill();
    c.fillRect(x+W*.68,base-H-W*.6,W*.1,W*.35);
    const cols=3,rows=3,ww=W*.14,wh=H*.16;
    for(let r=0;r<rows;r++)for(let k=0;k<cols;k++)win(c,x+W*.14+k*W*.29,base-H+H*.1+r*H*.3,ww,wh,R()<litP);
  }
  const scenes={
    house(c,w,h,R){sky(c,w,h,'#1c1a24','#0e0d11');moon(c,w*.78,h*.25,h*.09,1);
      for(let i=0;i<6;i++){const W=w*(.09+R()*.05);house(c,i*w*.17-w*.03,h*.95,W,h*(.35+R()*.15),R,.08)}
      house(c,w*.4,h*.97,w*.17,h*.62,R,.5);fog(c,w,h,R,h*.55,26,.16)},
    spectre(c,w,h,R){c.fillStyle='#0d0c10';c.fillRect(0,0,w,h);
      const dx=w*.42,dw=w*.16;c.fillStyle='#050406';c.fillRect(dx,h*.12,dw,h*.88);
      const g=c.createRadialGradient(dx+dw/2,h*.45,0,dx+dw/2,h*.45,h*.55);g.addColorStop(0,'rgba(200,215,225,.55)');g.addColorStop(1,'rgba(200,215,225,0)');c.fillStyle=g;c.fillRect(0,0,w,h);
      c.fillStyle='rgba(225,232,236,.75)';c.beginPath();const cx=dx+dw/2;c.arc(cx,h*.32,h*.06,0,7);c.fill();
      c.beginPath();c.moveTo(cx-h*.06,h*.38);c.quadraticCurveTo(cx-h*.15,h*.7,cx-h*.12,h*.95);
      for(let i=0;i<6;i++){c.lineTo(cx-h*.12+i*h*.048,h*(.88+(i%2)*.07))}c.quadraticCurveTo(cx+h*.15,h*.7,cx+h*.06,h*.38);c.fill();
      c.fillStyle='#0d0c10';c.beginPath();c.arc(cx-h*.02,h*.31,h*.012,0,7);c.arc(cx+h*.022,h*.31,h*.012,0,7);c.fill();
      c.strokeStyle='#2a2530';c.lineWidth=3;c.strokeRect(dx,h*.12,dw,h*.88);fog(c,w,h,R,h*.7,14,.1)},
    attic(c,w,h,R){c.fillStyle='#120f13';c.fillRect(0,0,w,h);
      c.fillStyle='#08070a';c.beginPath();c.moveTo(0,0);c.lineTo(w*.5,0);c.lineTo(0,h*.85);c.fill();c.beginPath();c.moveTo(w,0);c.lineTo(w*.5,0);c.lineTo(w,h*.85);c.fill();
      for(let i=1;i<6;i++){c.strokeStyle='#1d1820';c.lineWidth=4;c.beginPath();c.moveTo(w*.5-i*w*.09,0);c.lineTo(w*.5-i*w*.09-h*.2,h);c.stroke();c.beginPath();c.moveTo(w*.5+i*w*.09,0);c.lineTo(w*.5+i*w*.09+h*.2,h);c.stroke()}
      const g=c.createLinearGradient(w*.7,0,w*.45,h);g.addColorStop(0,'rgba(200,210,230,.22)');g.addColorStop(1,'rgba(200,210,230,0)');c.fillStyle=g;c.beginPath();c.moveTo(w*.66,h*.08);c.lineTo(w*.74,h*.08);c.lineTo(w*.62,h);c.lineTo(w*.4,h);c.fill();
      house(c,w*.44,h*.85,w*.12,h*.3,R,.6);c.fillStyle='#1a1519';c.fillRect(w*.4,h*.85,w*.2,h*.04)},
    crypt(c,w,h,R){sky(c,w,h,'#0d0c10','#121318');
      for(let i=0;i<5;i++){const ax=w*(.05+i*.22);c.strokeStyle='#1c1a20';c.lineWidth=h*.05;c.beginPath();c.arc(ax+w*.11,h*.55,w*.1,Math.PI,0);c.stroke()}
      c.fillStyle='#1b1a20';c.fillRect(w*.38,h*.56,w*.24,h*.1);c.fillStyle='#2a2730';c.fillRect(w*.42,h*.5,w*.16,h*.07);
      for(let i=0;i<12;i++){const a=Math.PI*(.05+.9*i/11),x=w*.5+Math.cos(a)*w*.38,y=h*.63-Math.sin(a)*h*.28,s=h*.09;
        const g=c.createRadialGradient(x,y,0,x,y,s*1.6);g.addColorStop(0,'rgba(190,205,215,.22)');g.addColorStop(1,'rgba(190,205,215,0)');c.fillStyle=g;c.fillRect(x-s*2,y-s*2,s*4,s*4);
        c.fillStyle='rgba(205,215,222,.55)';c.beginPath();c.arc(x,y-s*.55,s*.28,Math.PI,0);c.lineTo(x+s*.38,y+s*.6);c.lineTo(x-s*.38,y+s*.6);c.fill();c.fillStyle='#0b0a0e';c.beginPath();c.ellipse(x,y-s*.42,s*.15,s*.2,0,0,7);c.fill()}
      const wg=c.createLinearGradient(0,h*.66,0,h);wg.addColorStop(0,'rgba(40,52,58,.9)');wg.addColorStop(1,'rgba(10,14,16,1)');c.fillStyle=wg;c.fillRect(0,h*.66,w,h*.34);
      c.strokeStyle='rgba(180,200,210,.12)';c.lineWidth=1;for(let i=0;i<22;i++){const y=h*(.69+R()*.29),x=R()*w;c.beginPath();c.moveTo(x,y);c.lineTo(x+w*(.04+R()*.08),y);c.stroke()}},
    mound(c,w,h,R){sky(c,w,h,'#0e0d10','#141513');
      const cx=w*.5,base=h*.86;c.fillStyle='#1d1f17';c.beginPath();c.moveTo(cx-w*.26,base);
      for(let i=0;i<=40;i++){const t=i/40,a=Math.PI*(1-t),r=h*(.52+R()*.08);c.lineTo(cx+Math.cos(a)*w*.26*(.9+R()*.15),base-Math.sin(a)*r)}c.fill();
      c.strokeStyle='#2c3022';c.lineWidth=2;for(let i=0;i<60;i++){const x=cx+(R()-.5)*w*.44,y=base-R()*h*.5;c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+(R()-.5)*30,y+20,x+(R()-.5)*40,y+40);c.stroke()}
      c.fillStyle='#b0443a';c.globalAlpha=.85;c.beginPath();c.arc(cx-w*.04,base-h*.38,h*.018,0,7);c.arc(cx+w*.05,base-h*.4,h*.014,0,7);c.fill();c.globalAlpha=1;
      const wg=c.createLinearGradient(0,base,0,h);wg.addColorStop(0,'rgba(36,46,50,.95)');wg.addColorStop(1,'#0a0d0e');c.fillStyle=wg;c.fillRect(0,base-h*.02,w,h);fog(c,w,h,R,h*.5,12,.08)},
    village(c,w,h,R){sky(c,w,h,'#3a3a42','#1a191e');
      for(let i=0;i<14;i++){c.fillStyle=`rgba(80,80,90,${.15+R()*.1})`;c.beginPath();c.ellipse(R()*w,R()*h*.35,w*.2,h*.06,0,0,7);c.fill()}
      c.fillStyle='#141317';c.beginPath();c.moveTo(0,h*.6);for(let x=0;x<=w;x+=w/12)c.lineTo(x,h*(.42+R()*.12));c.lineTo(w,h);c.lineTo(0,h);c.fill();
      for(let i=0;i<9;i++){const x=w*(.04+i*.11+R()*.03),bw=w*.07,bh=h*(.12+R()*.08),b=h*.86;c.fillStyle='#0c0b0e';c.fillRect(x,b-bh,bw,bh);c.beginPath();c.moveTo(x-bw*.1,b-bh);c.lineTo(x+bw/2,b-bh-bw*.6);c.lineTo(x+bw*1.1,b-bh);c.fill();if(R()<.3)win(c,x+bw*.35,b-bh*.6,bw*.25,bh*.25,true)}
      c.fillStyle='#0a090c';c.fillRect(0,h*.86,w,h*.14);fog(c,w,h,R,h*.6,10,.06)}
  };
  function paint(cv){const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);cv.width=Math.round(r.width*d);cv.height=Math.round(r.height*d);const c=cv.getContext('2d');const name=cv.dataset.scene;let seed=0;for(const ch of name)seed=seed*31+ch.charCodeAt(0);(scenes[name]||scenes.house)(c,cv.width,cv.height,rng(seed));
    const v=c.createRadialGradient(cv.width/2,cv.height/2,cv.height*.3,cv.width/2,cv.height/2,cv.width*.7);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.55)');c.fillStyle=v;c.fillRect(0,0,cv.width,cv.height)}
  const all=[...document.querySelectorAll('canvas[data-scene]')];
  const run=()=>all.forEach(paint);run();let t;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(run,150)});
  if(document.fonts)document.fonts.ready.then(run);
})();
