<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gốm Bát Tràng Đương Đại | Cửa hàng trực tuyến</title>
<meta name="description" content="Gốm Bát Tràng thiết kế hiện đại, làm thủ công, giao toàn quốc.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Be+Vietnam+Pro:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --lam:#1d3b6e;      /* men lam */
  --lam-d:#12264a;
  --ngoc:#b7cdbf;     /* men ngọc */
  --ngoc-l:#e7efe9;
  --trang:#fbfcfa;    /* men trắng */
  --muc:#1a2230;
  --xam:#5b6575;
  --vang:#c9a24b;     /* chỉ vàng viền gốm */
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Be Vietnam Pro',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);color:var(--muc);background:var(--trang);line-height:1.6}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer}
:focus-visible{outline:3px solid var(--vang);outline-offset:2px}
.wrap{max-width:1120px;margin:0 auto;padding:0 20px}
h1,h2,h3{font-family:var(--serif);line-height:1.1;font-weight:600}
h2{font-size:clamp(2rem,4vw,2.8rem);color:var(--lam-d)}

/* Header */
header{position:sticky;top:0;z-index:20;background:rgba(251,252,250,.94);backdrop-filter:blur(8px);border-bottom:1px solid var(--ngoc)}
.nav{display:flex;align-items:center;justify-content:space-between;height:64px}
.logo{font-family:var(--serif);font-size:1.6rem;font-weight:700;color:var(--lam)}
.nav ul{display:flex;gap:26px;list-style:none;font-size:.95rem}
.nav a:hover{color:var(--lam)}
.cart-btn{background:var(--lam);color:#fff;border:0;border-radius:999px;padding:8px 18px;font-weight:500}
.cart-btn:hover{background:var(--lam-d)}
@media(max-width:700px){.nav ul{display:none}}

/* Hero */
.hero{background:var(--lam);color:#fff;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center;min-height:520px;padding-top:40px;padding-bottom:40px}
.hero h1{font-size:clamp(2.8rem,6.5vw,5rem);margin-bottom:18px}
.hero p{max-width:46ch;color:#d5deef;margin-bottom:28px}
.btn{display:inline-block;border:0;border-radius:6px;padding:13px 26px;font-weight:600;background:var(--vang);color:var(--lam-d)}
.btn:hover{background:#d8b45f}
.btn.alt{background:transparent;color:#fff;border:1.5px solid #fff;margin-left:10px}
.btn.alt:hover{background:rgba(255,255,255,.12)}
.hero-art{display:flex;justify-content:center}
.hero-art svg{width:min(340px,80%);height:auto;animation:rise 1.2s ease-out both}
@keyframes rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:800px){.hero .wrap{grid-template-columns:1fr;text-align:left}.hero-art{order:-1}.hero-art svg{width:180px}}

/* Cam kết */
.promise{background:var(--ngoc-l);padding:26px 0}
.promise .wrap{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;font-size:.92rem}
.promise strong{display:block;color:var(--lam-d)}
@media(max-width:800px){.promise .wrap{grid-template-columns:1fr 1fr}}

/* Sản phẩm */
section{padding:72px 0}
.head{display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:end;margin-bottom:30px}
.filters{display:flex;flex-wrap:wrap;gap:8px}
.filters button{border:1.5px solid var(--ngoc);background:#fff;border-radius:999px;padding:7px 16px;font-size:.9rem}
.filters button[aria-pressed=true]{background:var(--lam);border-color:var(--lam);color:#fff}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:26px}
.card{display:flex;flex-direction:column}
.thumb{background:var(--ngoc-l);aspect-ratio:1/1.1;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:background .25s}
.card:hover .thumb{background:var(--ngoc)}
.thumb svg{width:62%;height:auto}
.card h3{font-size:1.4rem;margin:14px 0 2px}
.card .meta{font-size:.85rem;color:var(--xam)}
.card .row{display:flex;justify-content:space-between;align-items:center;margin-top:10px}
.price{font-weight:600;color:var(--lam)}
.add{background:#fff;border:1.5px solid var(--lam);color:var(--lam);border-radius:6px;padding:7px 14px;font-size:.88rem;font-weight:500}
.add:hover{background:var(--lam);color:#fff}

/* Câu chuyện */
.story{background:var(--lam-d);color:#e6ecf7}
.story .wrap{display:grid;grid-template-columns:1fr 1fr;gap:50px}
.story h2{color:#fff}
.story p+p{margin-top:14px}
@media(max-width:800px){.story .wrap{grid-template-columns:1fr;gap:20px}}

/* Lộ trình 12 tháng (đây là chuỗi tuần tự thật nên có đánh số) */
.road{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px;margin-top:30px}
.phase{border-top:4px solid var(--lam);background:#fff;padding:18px;box-shadow:0 1px 0 var(--ngoc)}
.phase b{font-family:var(--serif);font-size:1.3rem;color:var(--lam)}
.phase small{display:block;color:var(--xam);margin-bottom:8px}
.phase ul{padding-left:18px;font-size:.9rem}
.kpi{margin-top:26px;background:var(--ngoc-l);padding:18px 22px;font-size:.93rem}

/* Liên hệ & footer */
footer{background:var(--muc);color:#b9c1cf;padding:36px 0;font-size:.9rem}
footer .wrap{display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between}

/* Giỏ hàng */
.overlay{position:fixed;inset:0;background:rgba(10,18,34,.5);opacity:0;pointer-events:none;transition:opacity .2s;z-index:30}
.overlay.open{opacity:1;pointer-events:auto}
.drawer{position:fixed;top:0;right:0;height:100%;width:min(420px,100%);background:#fff;z-index:31;transform:translateX(100%);transition:transform .25s;display:flex;flex-direction:column}
.drawer.open{transform:none}
.drawer header{position:static;display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff}
.drawer h3{font-size:1.6rem}
.x{background:none;border:0;font-size:1.6rem;line-height:1}
.items{flex:1;overflow:auto;padding:0 20px}
.item{display:grid;grid-template-columns:56px 1fr auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--ngoc-l)}
.item .mini{background:var(--ngoc-l);border-radius:4px;display:flex;justify-content:center;padding:4px}
.item .mini svg{width:34px;height:auto}
.qty{display:flex;gap:8px;align-items:center;margin-top:4px}
.qty button{width:26px;height:26px;border:1px solid var(--ngoc);background:#fff;border-radius:4px}
.empty{padding:30px 0;color:var(--xam)}
.foot{padding:16px 20px;border-top:1px solid var(--ngoc)}
.total{display:flex;justify-content:space-between;font-weight:600;margin-bottom:12px}
.foot .btn{width:100%;background:var(--lam);color:#fff}
.foot .btn:disabled{opacity:.4;cursor:not-allowed}
form.co{display:none;padding:0 20px 16px}
form.co.open{display:block}
form.co input,form.co select{width:100%;padding:10px;margin-top:8px;border:1.5px solid var(--ngoc);border-radius:6px;font:inherit}
.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--muc);color:#fff;padding:12px 20px;border-radius:6px;z-index:40;display:none}
.toast.show{display:block}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>
</head>
<body>

<header>
  <div class="wrap nav">
    <a href="#top" class="logo">Gốm Bát Tràng</a>
    <ul>
      <li><a href="#san-pham">Sản phẩm</a></li>
      <li><a href="#cau-chuyen">Câu chuyện làng nghề</a></li>
      <li><a href="#lo-trinh">Lộ trình 12 tháng</a></li>
    </ul>
    <button class="cart-btn" id="openCart" aria-label="Mở giỏ hàng">Giỏ hàng (<span id="count">0</span>)</button>
  </div>
</header>

<main id="top">
<div class="hero">
  <div class="wrap">
    <div>
      <h1>Gốm nghìn năm,<br>dáng hình hôm nay</h1>
      <p>Bình, bát, ấm trà làm thủ công tại Bát Tràng, Hà Nội. Men lam, men ngọc, men trắng được thiết kế gọn gàng cho căn nhà hiện đại.</p>
      <a href="#san-pham" class="btn">Xem bộ sưu tập</a>
      <a href="#cau-chuyen" class="btn alt">Về làng nghề</a>
    </div>
    <div class="hero-art" id="heroArt" aria-hidden="true"></div>
  </div>
</div>

<div class="promise">
  <div class="wrap">
    <div><strong>Làm thủ công</strong>Từng sản phẩm do nghệ nhân Bát Tràng thực hiện</div>
    <div><strong>Giao toàn quốc</strong>Đóng gói chống vỡ, miễn phí đơn từ 1.000.000đ</div>
    <div><strong>Đổi trả 7 ngày</strong>Nếu sản phẩm nứt vỡ khi nhận hàng</div>
    <div><strong>Thanh toán linh hoạt</strong>COD, chuyển khoản, ví điện tử</div>
  </div>
</div>

<section id="san-pham">
  <div class="wrap">
    <div class="head">
      <h2>Bộ sưu tập</h2>
      <div class="filters" id="filters" role="group" aria-label="Lọc theo loại sản phẩm"></div>
    </div>
    <div class="grid" id="grid"></div>
  </div>
</section>

<section class="story" id="cau-chuyen">
  <div class="wrap">
    <h2>Làng gốm bên sông Hồng</h2>
    <div>
      <p>Bát Tràng thuộc Hà Nội, có lịch sử làm gốm hàng trăm năm. Gốm ở đây nổi tiếng với men lam, men rạn, men ngọc và men trắng.</p>
      <p>Chúng tôi giữ kỹ thuật nung và tráng men truyền thống, nhưng thiết kế dáng gốm đơn giản hơn để dùng hằng ngày: cắm hoa, pha trà, bày bàn ăn.</p>
    </div>
  </div>
</section>

<section id="lo-trinh">
  <div class="wrap">
    <h2>Lộ trình đưa gốm lên sàn thương mại điện tử</h2>
    <div class="road">
      <div class="phase"><b>Quý 1</b><small>Tháng 1–3: Chuẩn bị</small><ul><li>Khảo sát thị trường, khách hàng mục tiêu</li><li>Chọn 20–30 mẫu thiết kế chủ lực</li><li>Chụp ảnh, quay video, viết mô tả</li><li>Xây website và mở gian hàng Shopee, TikTok Shop</li></ul></div>
      <div class="phase"><b>Quý 2</b><small>Tháng 4–6: Thử nghiệm</small><ul><li>Bán thử trên website và 2 sàn</li><li>Chạy quảng cáo nhỏ, hợp tác KOC</li><li>Hoàn thiện quy trình đóng gói, vận chuyển</li><li>Thu thập đánh giá để cải thiện mẫu</li></ul></div>
      <div class="phase"><b>Quý 3</b><small>Tháng 7–9: Tăng trưởng</small><ul><li>Livestream, chạy khuyến mãi theo mùa</li><li>Ra bộ sưu tập mới theo phản hồi</li><li>Bán quà tặng doanh nghiệp, đặt riêng</li><li>Chăm sóc khách cũ, email, Zalo OA</li></ul></div>
      <div class="phase"><b>Quý 4</b><small>Tháng 10–12: Mở rộng</small><ul><li>Cao điểm Tết: bộ quà tặng, bình hoa</li><li>Thử bán xuyên biên giới (Etsy, Amazon)</li><li>Đánh giá kết quả, điều chỉnh kế hoạch năm sau</li></ul></div>
    </div>
    <p class="kpi"><b>Chỉ số theo dõi:</b> lượt truy cập, tỷ lệ chuyển đổi đơn hàng, giá trị đơn trung bình, tỷ lệ hoàn trả, đánh giá trung bình của khách. Mục tiêu cụ thể cần đặt theo vốn và năng lực sản xuất của cơ sở.</p>
  </div>
</section>
</main>

<footer>
  <div class="wrap">
    <div><b style="color:#fff">Gốm Bát Tràng</b><br>Xã Bát Tràng, Gia Lâm, Hà Nội</div>
    <div>Hotline: 0900 000 000<br>Email: lienhe@example.com</div>
    <div>Website mẫu cho đề án học tập</div>
  </div>
</footer>

<!-- Giỏ hàng -->
<div class="overlay" id="overlay"></div>
<aside class="drawer" id="drawer" aria-label="Giỏ hàng" aria-hidden="true">
  <header><h3>Giỏ hàng</h3><button class="x" id="closeCart" aria-label="Đóng giỏ hàng">&times;</button></header>
  <div class="items" id="items"></div>
  <form class="co" id="co">
    <input required name="ten" placeholder="Họ và tên" autocomplete="name">
    <input required name="sdt" placeholder="Số điện thoại" inputmode="tel" pattern="[0-9 +]{9,13}" autocomplete="tel">
    <input required name="dc" placeholder="Địa chỉ nhận hàng" autocomplete="street-address">
    <select name="tt" aria-label="Phương thức thanh toán"><option>Thanh toán khi nhận hàng (COD)</option><option>Chuyển khoản ngân hàng</option></select>
  </form>
  <div class="foot">
    <div class="total"><span>Tổng cộng</span><span id="total">0đ</span></div>
    <button class="btn" id="checkout" disabled>Tiến hành đặt hàng</button>
  </div>
</aside>
<div class="toast" id="toast" role="status"></div>

<script>
/* ---------- Dữ liệu sản phẩm (sửa tại đây) ---------- */
const PRODUCTS=[
 {id:1,ten:"Bình hoa men lam Sông Hồng",loai:"Bình hoa",men:"Men lam",gia:690000,dang:"binh",mau:"#1d3b6e",vien:"#c9a24b"},
 {id:2,ten:"Bình cổ cao men ngọc",loai:"Bình hoa",men:"Men ngọc",gia:850000,dang:"cao",mau:"#8fb3a0",vien:"#fbfcfa"},
 {id:3,ten:"Bình tròn men trắng",loai:"Bình hoa",men:"Men trắng",gia:540000,dang:"tron",mau:"#f1f3ef",vien:"#1d3b6e"},
 {id:4,ten:"Ấm trà men rạn",loai:"Bộ trà",men:"Men rạn",gia:1250000,dang:"am",mau:"#d9cfbd",vien:"#5b6575"},
 {id:5,ten:"Ấm trà men lam",loai:"Bộ trà",men:"Men lam",gia:1390000,dang:"am",mau:"#2b5190",vien:"#c9a24b"},
 {id:6,ten:"Bát ăn cơm men trắng viền lam",loai:"Bát đĩa",men:"Men trắng",gia:120000,dang:"bat",mau:"#f1f3ef",vien:"#1d3b6e"},
 {id:7,ten:"Bát tô men ngọc",loai:"Bát đĩa",men:"Men ngọc",gia:260000,dang:"bat",mau:"#8fb3a0",vien:"#fbfcfa"},
 {id:8,ten:"Đĩa tròn men lam",loai:"Bát đĩa",men:"Men lam",gia:310000,dang:"dia",mau:"#1d3b6e",vien:"#f1f3ef"}
];
const SHAPES={
 binh:"M38 8h24v6c0 6-4 9-6 14 14 10 22 24 22 44 0 22-14 36-28 36S22 94 22 72c0-20 8-34 22-44-2-5-6-8-6-14z",
 cao:"M42 6h16v10c0 12-6 16-6 26 8 8 14 20 14 38 0 20-8 34-16 34s-16-14-16-34c0-18 6-30 14-38 0-10-6-14-6-26z",
 tron:"M40 14h20v10c18 6 30 22 30 42 0 24-18 40-40 40S10 90 10 66c0-20 12-36 30-42z",
 am:"M34 28c0-6 6-10 16-10s16 4 16 10c20 4 26 20 20 36-4 10-12 18-20 24v6H34v-6C18 80 12 62 22 46c4-8 8-14 12-18zM84 48c12-2 14 14 2 20",
 bat:"M8 40h84c0 30-18 54-42 54S8 70 8 40zM34 100h32v6H34z",
 dia:"M4 80c0-8 20-14 46-14s46 6 46 14-20 14-46 14S4 88 4 80zM24 82c0 4 12 6 26 6s26-2 26-6"
};
function vase(p,w){
  const d=SHAPES[p.dang]; const vb=p.dang==="bat"?"0 20 100 100":p.dang==="dia"?"0 50 100 60":"0 0 100 120";
  const band=p.dang==="binh"||p.dang==="cao"||p.dang==="tron"?`<path d="M26 70h48" stroke="${p.vien}" stroke-width="2.5" fill="none"/><path d="M28 78h44" stroke="${p.vien}" stroke-width="1.2" fill="none"/>`:
   p.dang==="bat"?`<path d="M12 48h76" stroke="${p.vien}" stroke-width="2.5" fill="none"/>`:"";
  return `<svg viewBox="${vb}" role="img" aria-label="${p.ten}"><path d="${d}" fill="${p.mau}" stroke="${p.vien==="#fbfcfa"?"#6f9683":p.mau==="#f1f3ef"?"#c8d2c9":"none"}" stroke-width="1"/>${band}</svg>`;
}
const vnd=n=>n.toLocaleString("vi-VN")+"đ";
const $=id=>document.getElementById(id);

/* ---------- Hero ---------- */
$("heroArt").innerHTML=vase({ten:"",dang:"binh",mau:"#f1f3ef",vien:"#c9a24b"});

/* ---------- Lọc & hiển thị sản phẩm ---------- */
let loc="Tất cả";
const loai=["Tất cả",...new Set(PRODUCTS.map(p=>p.loai))];
function renderFilters(){
  $("filters").innerHTML=loai.map(l=>`<button aria-pressed="${l===loc}" data-l="${l}">${l}</button>`).join("");
}
function renderGrid(){
  const list=PRODUCTS.filter(p=>loc==="Tất cả"||p.loai===loc);
  $("grid").innerHTML=list.map(p=>`
  <article class="card">
    <div class="thumb">${vase(p)}</div>
    <h3>${p.ten}</h3>
    <div class="meta">${p.loai}, ${p.men}</div>
    <div class="row"><span class="price">${vnd(p.gia)}</span><button class="add" data-id="${p.id}">Thêm vào giỏ</button></div>
  </article>`).join("");
}
$("filters").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;loc=b.dataset.l;renderFilters();renderGrid();});
$("grid").addEventListener("click",e=>{const b=e.target.closest(".add");if(!b)return;addItem(+b.dataset.id);});

/* ---------- Giỏ hàng ---------- */
let cart={};
try{cart=JSON.parse(localStorage.getItem("bt-cart")||"{}")}catch(e){cart={}}
const save=()=>{try{localStorage.setItem("bt-cart",JSON.stringify(cart))}catch(e){}};
function toast(t){const el=$("toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200);}
function addItem(id){cart[id]=(cart[id]||0)+1;save();renderCart();toast("Đã thêm vào giỏ hàng");}
function setQty(id,q){if(q<=0)delete cart[id];else cart[id]=q;save();renderCart();}
function renderCart(){
  const ids=Object.keys(cart).filter(id=>PRODUCTS.some(p=>p.id==id));
  let total=0,count=0;
  $("items").innerHTML=ids.length?ids.map(id=>{
    const p=PRODUCTS.find(x=>x.id==id),q=cart[id];total+=p.gia*q;count+=q;
    return `<div class="item"><div class="mini">${vase(p)}</div>
      <div><div>${p.ten}</div><div class="qty"><button data-m="${id}" aria-label="Giảm số lượng">−</button><span>${q}</span><button data-p="${id}" aria-label="Tăng số lượng">+</button></div></div>
      <div class="price">${vnd(p.gia*q)}</div></div>`}).join(""):
    `<p class="empty">Giỏ hàng đang trống. Chọn sản phẩm từ bộ sưu tập để bắt đầu.</p>`;
  $("total").textContent=vnd(total);$("count").textContent=count;
  $("checkout").disabled=!ids.length;
  if(!ids.length)$("co").classList.remove("open");
}
$("items").addEventListener("click",e=>{
  const m=e.target.dataset.m,p=e.target.dataset.p;
  if(m)setQty(m,cart[m]-1);if(p)setQty(p,cart[p]+1);
});
function openCart(o){
  $("drawer").classList.toggle("open",o);$("overlay").classList.toggle("open",o);
  $("drawer").setAttribute("aria-hidden",!o);
}
$("openCart").onclick=()=>openCart(true);
$("closeCart").onclick=$("overlay").onclick=()=>openCart(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape")openCart(false)});

/* Đặt hàng: bước 1 mở form, bước 2 xác nhận */
$("checkout").onclick=()=>{
  const f=$("co");
  if(!f.classList.contains("open")){f.classList.add("open");$("checkout").textContent="Xác nhận đặt hàng";f.querySelector("input").focus();return;}
  if(!f.reportValidity())return;
  /* Đơn hàng thật cần gửi về máy chủ hoặc dịch vụ như Google Forms, Formspree... */
  cart={};save();renderCart();f.reset();f.classList.remove("open");
  $("checkout").textContent="Tiến hành đặt hàng";openCart(false);
  toast("Đặt hàng thành công. Chúng tôi sẽ liên hệ xác nhận sớm.");
};

renderFilters();renderGrid();renderCart();
</script>
</body>
</html>
