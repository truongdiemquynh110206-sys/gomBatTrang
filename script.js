/* ---------- Dữ liệu sản phẩm (sửa tại đây) ----------
   Muốn dùng ảnh thật: thêm thuộc tính  anh:"anh/ten-file.jpg"  vào sản phẩm. */
const PRODUCTS=[
 {id:1,ten:"Bình hoa men lam Sông Hồng",loai:"Bình hoa",men:"Men lam",gia:690000,dang:"binh",mau:"#1d3b6e",vien:"#c9a24b"},
 {id:2,ten:"Bình cổ cao men ngọc",loai:"Bình hoa",men:"Men ngọc",gia:850000,dang:"cao",mau:"#8fb3a0",vien:"#fbfcfa"},
 {id:3,ten:"Bình tròn men trắng",loai:"Bình hoa",men:"Men trắng",gia:540000,dang:"tron",mau:"#f1f3ef",vien:"#1d3b6e"},
 {id:4,ten:"Lọ hoa nhỏ men rạn",loai:"Bình hoa",men:"Men rạn",gia:420000,dang:"binh",mau:"#d9cfbd",vien:"#5b6575"},
 {id:5,ten:"Ấm trà men rạn",loai:"Bộ trà",men:"Men rạn",gia:1250000,dang:"am",mau:"#d9cfbd",vien:"#5b6575"},
 {id:6,ten:"Ấm trà men lam",loai:"Bộ trà",men:"Men lam",gia:1390000,dang:"am",mau:"#2b5190",vien:"#c9a24b"},
 {id:7,ten:"Bát ăn cơm men trắng viền lam",loai:"Bát đĩa",men:"Men trắng",gia:120000,dang:"bat",mau:"#f1f3ef",vien:"#1d3b6e"},
 {id:8,ten:"Bát tô men ngọc",loai:"Bát đĩa",men:"Men ngọc",gia:260000,dang:"bat",mau:"#8fb3a0",vien:"#fbfcfa"},
 {id:9,ten:"Đĩa tròn men lam",loai:"Bát đĩa",men:"Men lam",gia:310000,dang:"dia",mau:"#1d3b6e",vien:"#f1f3ef"},
 {id:10,ten:"Đĩa men trắng viền vàng",loai:"Bát đĩa",men:"Men trắng",gia:350000,dang:"dia",mau:"#f1f3ef",vien:"#c9a24b"}
];
const CAT_ICON={"Bình hoa":PRODUCTS[0],"Bộ trà":PRODUCTS[5],"Bát đĩa":PRODUCTS[7]};

const SHAPES={
 binh:"M38 8h24v6c0 6-4 9-6 14 14 10 22 24 22 44 0 22-14 36-28 36S22 94 22 72c0-20 8-34 22-44-2-5-6-8-6-14z",
 cao:"M42 6h16v10c0 12-6 16-6 26 8 8 14 20 14 38 0 20-8 34-16 34s-16-14-16-34c0-18 6-30 14-38 0-10-6-14-6-26z",
 tron:"M40 14h20v10c18 6 30 22 30 42 0 24-18 40-40 40S10 90 10 66c0-20 12-36 30-42z",
 am:"M34 28c0-6 6-10 16-10s16 4 16 10c20 4 26 20 20 36-4 10-12 18-20 24v6H34v-6C18 80 12 62 22 46c4-8 8-14 12-18zM84 48c12-2 14 14 2 20",
 bat:"M8 40h84c0 30-18 54-42 54S8 70 8 40zM34 100h32v6H34z",
 dia:"M4 80c0-8 20-14 46-14s46 6 46 14-20 14-46 14S4 88 4 80zM24 82c0 4 12 6 26 6s26-2 26-6"
};
function art(p){
  if(p.anh)return `<img src="${p.anh}" alt="${p.ten}" loading="lazy">`;
  const vb=p.dang==="bat"?"0 20 100 100":p.dang==="dia"?"0 50 100 60":"0 0 100 120";
  const tall=["binh","cao","tron"].includes(p.dang);
  const band=tall?`<path d="M26 70h48" stroke="${p.vien}" stroke-width="2.5" fill="none"/><path d="M28 78h44" stroke="${p.vien}" stroke-width="1.2" fill="none"/>`
    :p.dang==="bat"?`<path d="M12 48h76" stroke="${p.vien}" stroke-width="2.5" fill="none"/>`:"";
  const edge=p.mau==="#f1f3ef"?"#c8d2c9":p.vien==="#fbfcfa"?"#6f9683":"none";
  return `<svg viewBox="${vb}" role="img" aria-label="${p.ten}"><path d="${SHAPES[p.dang]}" fill="${p.mau}" stroke="${edge}" stroke-width="1"/>${band}</svg>`;
}
const vnd=n=>n.toLocaleString("vi-VN")+"đ";
const $=id=>document.getElementById(id);

/* ---------- Trang chủ ---------- */
$("heroArt").innerHTML=art({ten:"",dang:"binh",mau:"#f1f3ef",vien:"#c9a24b"});

/* ---------- Danh mục + lọc ---------- */
let loc="Tất cả";
const LOAI=["Tất cả",...new Set(PRODUCTS.map(p=>p.loai))];
function renderCats(){
  $("cats").innerHTML=LOAI.filter(l=>l!=="Tất cả").map(l=>{
    const n=PRODUCTS.filter(p=>p.loai===l).length;
    return `<button class="cat" data-l="${l}" aria-pressed="${l===loc}">${art(CAT_ICON[l])}<b>${l}</b><span>${n} sản phẩm</span></button>`}).join("");
}
function renderFilters(){
  $("filters").innerHTML=LOAI.map(l=>`<button data-l="${l}" aria-pressed="${l===loc}">${l}</button>`).join("");
}
function renderGrid(){
  const list=PRODUCTS.filter(p=>loc==="Tất cả"||p.loai===loc);
  $("listTitle").textContent=loc==="Tất cả"?"Tất cả sản phẩm":loc;
  $("grid").innerHTML=list.map(p=>`
  <article class="card">
    <div class="thumb">${art(p)}</div>
    <h3>${p.ten}</h3>
    <div class="meta">${p.loai}, ${p.men}</div>
    <div class="row"><span class="price">${vnd(p.gia)}</span><button class="add" data-id="${p.id}">Thêm vào giỏ</button></div>
  </article>`).join("");
}
function setLoc(l,scroll){loc=l;renderCats();renderFilters();renderGrid();if(scroll)$("san-pham").scrollIntoView();}
$("cats").addEventListener("click",e=>{const b=e.target.closest(".cat");if(b)setLoc(b.dataset.l,true);});
$("filters").addEventListener("click",e=>{const b=e.target.closest("button");if(b)setLoc(b.dataset.l,false);});
$("grid").addEventListener("click",e=>{const b=e.target.closest(".add");if(b)addItem(+b.dataset.id);});

/* ---------- Giỏ hàng ---------- */
let cart={};
try{cart=JSON.parse(localStorage.getItem("bt-cart")||"{}")}catch(e){cart={}}
const save=()=>{try{localStorage.setItem("bt-cart",JSON.stringify(cart))}catch(e){}};
function toast(t){const el=$("toast");el.textContent=t;el.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("show"),2200);}
function addItem(id){cart[id]=(cart[id]||0)+1;save();renderCart();toast("Đã thêm vào giỏ hàng");}
function setQty(id,q){if(q<=0)delete cart[id];else cart[id]=q;save();renderCart();}
function renderCart(){
  const ids=Object.keys(cart).filter(id=>PRODUCTS.some(p=>p.id==id));
  let total=0,count=0;
  $("items").innerHTML=ids.length?ids.map(id=>{
    const p=PRODUCTS.find(x=>x.id==id),q=cart[id];total+=p.gia*q;count+=q;
    return `<div class="item"><div class="mini">${art(p)}</div>
      <div><div>${p.ten}</div><div class="qty"><button data-m="${id}" aria-label="Giảm số lượng">−</button><span>${q}</span><button data-p="${id}" aria-label="Tăng số lượng">+</button><button class="del" data-d="${id}">Xóa</button></div></div>
      <div class="price right">${vnd(p.gia*q)}</div></div>`}).join(""):
    `<p class="empty">Giỏ hàng đang trống. Chọn sản phẩm trong danh mục để bắt đầu.</p>`;
  $("total").textContent=vnd(total);$("count").textContent=count;
  $("checkout").disabled=!ids.length;
  if(!ids.length){$("co").classList.remove("open");$("checkout").textContent="Tiến hành đặt hàng";}
}
$("items").addEventListener("click",e=>{
  const {m,p,d}=e.target.dataset;
  if(m)setQty(m,cart[m]-1); if(p)setQty(p,cart[p]+1); if(d)setQty(d,0);
});
function openCart(o){
  $("drawer").classList.toggle("open",o);$("overlay").classList.toggle("open",o);
  $("drawer").setAttribute("aria-hidden",!o);
}
$("openCart").onclick=()=>openCart(true);
$("closeCart").onclick=$("overlay").onclick=()=>openCart(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape")openCart(false)});

/* Đặt hàng (mô phỏng): bấm lần 1 mở form, lần 2 xác nhận */
$("checkout").onclick=()=>{
  const f=$("co");
  if(!f.classList.contains("open")){f.classList.add("open");$("checkout").textContent="Xác nhận đặt hàng";f.querySelector("input").focus();return;}
  if(!f.reportValidity())return;
  cart={};save();renderCart();f.reset();f.classList.remove("open");
  $("checkout").textContent="Tiến hành đặt hàng";openCart(false);
  toast("Đặt hàng thành công (mô phỏng).");
};

setLoc("Tất cả",false);renderCart();
