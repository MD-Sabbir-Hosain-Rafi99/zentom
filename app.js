/***********************
 * CONFIG (IMPORTANT)
 ***********************/
const SHEET_WEB_APP_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
// Example: https://script.google.com/macros/s/XXXX/exec

/***********************
 * PRODUCT DATA (30 items)
 * Replace images/title/price as you want.
 ***********************/
const PRODUCTS = [
    {
        id: 1,
        title: "BESTWIN BW Pro Sport Quartz Watch – Premium Steel Edition",
        price: 1485,          // Offer price
        regularPrice: 1650,   // Regular price

        short: "Premium Steel Sport Edition – Bold & Durable Design",

        description: `
<p>Make a bold statement with the BESTWIN BW-908 Pro Sport Series. Designed with a multi-layer textured dial and screw-detailed bezel, this watch delivers a powerful and premium sporty look. Solid stainless steel construction ensures durability and long-lasting shine.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications:</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Model Series:</strong> BW Pro Sport</li>
  <li><strong>Movement:</strong> High Precision Quartz</li>
  <li><strong>Case Material:</strong> Stainless Steel</li>
  <li><strong>Strap Material:</strong> Solid Stainless Steel</li>
  <li><strong>Glass:</strong> Hardlex / Mineral Glass</li>
  <li><strong>Display Type:</strong> Analog</li>
  <li><strong>Water Resistance:</strong> Splash Resistant</li>
</ul>

<h4 class="font-semibold mt-4">📏 Size Details:</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Diameter:</strong> 43mm – 44mm</li>
  <li><strong>Case Thickness:</strong> 11mm – 12mm</li>
  <li><strong>Band Width:</strong> 22mm</li>
  <li><strong>Band Length:</strong> 22cm (Adjustable)</li>
  <li><strong>Weight:</strong> Approx. 130g – 150g</li>
</ul>
`,

        // images/watch 3/BESTWIN BW Pro Sport/18688f77-d4b7-41d9-a42a-a879d5b51d35.jpg
        // images/watch 3/BESTWIN BW Pro Sport/0502cb78-7aac-475d-bcbf-52cc7fcf5e63.jpg
        variants: [
            { color: "Full Black", img: "images/watch 3/BESTWIN BW Pro Sport/8e0df4e6-977f-4d3d-afa1-d40fc16e13d4.jpg" },
            { color: "Deep Blue", img: "images/watch 3/BESTWIN BW Pro Sport/18688f77-d4b7-41d9-a42a-a879d5b51d35.jpg" },
            { color: "Silver Black", img: "images/watch 3/BESTWIN BW Pro Sport/8e72c338-28bf-4663-9d97-de244a1c4dff.jpg" },
            { color: "Silver Navy-Blue", img: "images/watch 3/BESTWIN BW Pro Sport/0502cb78-7aac-475d-bcbf-52cc7fcf5e63.jpg" },
            { color: "Rose Gold / Bronze", img: "images/watch 3/BESTWIN BW Pro Sport/903c7c11-b2b8-4c38-bf76-5a75018c0530.jpg" },
        ],
        // images/watch 3/BESTWIN BW Pro Sport/8e72c338-28bf-4663-9d97-de244a1c4dff.jpg
        // images/watch 3/BESTWIN BW Pro Sport/18688f77-d4b7-41d9-a42a-a879d5b51d35.jpg
        gallery: [
            "images/watch 3/BESTWIN BW Pro Sport/18688f77-d4b7-41d9-a42a-a879d5b51d35.jpg",
            "images/watch 3/BESTWIN BW Pro Sport/8e0df4e6-977f-4d3d-afa1-d40fc16e13d4.jpg",
            "images/watch 3/BESTWIN BW Pro Sport/8e72c338-28bf-4663-9d97-de244a1c4dff.jpg",
            "images/watch 3/BESTWIN BW Pro Sport/903c7c11-b2b8-4c38-bf76-5a75018c0530.jpg",
            "images/watch 3/BESTWIN BW Pro Sport/0502cb78-7aac-475d-bcbf-52cc7fcf5e63.jpg",
        ],
    },
    {
        id: 2,
        title: "BESTWIN Minimalist Series – Premium Steel Edition",

        price: 1450,          // Offer Price
        regularPrice: 1600,   // Regular Price

        short: "Clean, classy & timeless minimalist design.",

        description: `
<p>Simplicity meets elegance.</p>

<p>The BESTWIN Minimalist Series is designed for men who prefer a clean, classy, and timeless look. Featuring a sleek dial design with sharp hour markers and a premium brushed stainless steel finish, this watch delivers effortless sophistication.</p>

<p>Perfect for office wear, formal meetings, daily styling, and gifting.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications:</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Movement:</strong> High Precision Quartz</li>
  <li><strong>Case Material:</strong> Stainless Steel</li>
  <li><strong>Strap Material:</strong> Solid Stainless Steel</li>
  <li><strong>Glass:</strong> Hardlex / Mineral Glass</li>
  <li><strong>Display:</strong> Analog</li>
  <li><strong>Water Resistance:</strong> Splash Resistant</li>
  <li><strong>Clasp Type:</strong> Fold Over Clasp</li>
</ul>

<h4 class="font-semibold mt-4">📏 Size Details:</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Diameter:</strong> 40mm – 42mm</li>
  <li><strong>Case Thickness:</strong> 9mm – 10mm</li>
  <li><strong>Band Width:</strong> 20mm</li>
  <li><strong>Band Length:</strong> 22cm (Adjustable)</li>
  <li><strong>Weight:</strong> Approx. 110g – 130g</li>
</ul>
`,

        variants: [
            { color: "Full Black", img: "images/watch 3/BESTWIN Minimalist Series_/d08fa661-b95b-4e07-864e-38d08fcbf381.jpg" },
            { color: "Gold", img: "images/watch 3/BESTWIN Minimalist Series_/3afc77ef-d3c2-4915-b92b-fc01245bdf4d.jpg" },
            { color: "Gold Dial Blue", img: "images/watch 3/BESTWIN Minimalist Series_/283397a8-07c0-46a0-abb4-1a1f19f6d58b.jpg" },
        ],

        gallery: [
            "images/watch 3/BESTWIN Minimalist Series_/d08fa661-b95b-4e07-864e-38d08fcbf381.jpg",
            "images/watch 3/BESTWIN Minimalist Series_/3afc77ef-d3c2-4915-b92b-fc01245bdf4d.jpg",
            "images/watch 3/BESTWIN Minimalist Series_/283397a8-07c0-46a0-abb4-1a1f19f6d58b.jpg",
        ],
    },
    {
        id: 3,
        title: "BESTWIN Octagonal Series – Premium Steel Edition",

        price: 1485,          // Offer Price
        regularPrice: 1650,   // Regular Price

        short: "Refined octagonal bezel with premium steel finish.",

        description: `
<p>Make a sophisticated statement with the BESTWIN Octagonal Series. Designed with a clean, sunray dial and a signature brushed octagonal bezel, this watch delivers a refined and premium look for both formal and casual wear. Solid stainless steel construction ensures durability and a timeless finish.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications:</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Movement:</strong> High Precision Quartz</li>
  <li><strong>Case Material:</strong> Premium Stainless Steel</li>
  <li><strong>Strap Material:</strong> Solid Stainless Steel</li>
  <li><strong>Glass:</strong> Hardlex / Mineral Glass</li>
  <li><strong>Display Type:</strong> Analog with Date Window</li>
  <li><strong>Water Resistance:</strong> 3ATM (Splash Resistant)</li>
</ul>

<h4 class="font-semibold mt-4">📏 Size Details:</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Diameter:</strong> 41mm – 42mm</li>
  <li><strong>Case Thickness:</strong> 10mm – 11mm</li>
  <li><strong>Band Width:</strong> 20mm</li>
  <li><strong>Band Length:</strong> 22cm (Adjustable)</li>
  <li><strong>Weight:</strong> Approx. 120g – 135g</li>
</ul>
`,

        variants: [
            { color: "Black-Silver", img: "images/watch 3/BESTWIN Octagonal Series_/a26839ca-96e9-49b3-9b1f-437ecff6144c.jpg" },
            { color: "Executive Silver", img: "images/watch 3/BESTWIN Octagonal Series_/1e98cb32-0667-4ea9-b140-fada90491b4c.jpg" },
            { color: "Gold-Black", img: "images/watch 3/BESTWIN Octagonal Series_/8a7451e2-c2fe-4726-8d28-0b20684bd1ae.jpg" },
        ],

        gallery: [
            "images/watch 3/BESTWIN Octagonal Series_/a26839ca-96e9-49b3-9b1f-437ecff6144c.jpg",
            "images/watch 3/BESTWIN Octagonal Series_/1e98cb32-0667-4ea9-b140-fada90491b4c.jpg",
            "images/watch 3/BESTWIN Octagonal Series_/8a7451e2-c2fe-4726-8d28-0b20684bd1ae.jpg",
        ],
    },
    {
        id: 4,
        title: "BESTWIN Premium Quartz Watch – Elegant & Modern Design",

        price: 1485,          // Offer Price
        regularPrice: 1650,   // Regular Price

        short: "Modern design meets timeless elegance.",

        description: `
<p>Upgrade your style with the BESTWIN Premium Quartz Watch – a perfect blend of modern design and timeless elegance. Crafted with a high-quality stainless steel body and a sleek brushed finish, this watch delivers a bold yet classy look for everyday wear.</p>

<p>The textured dial with minimalist hour markers gives a sophisticated touch, while the precision quartz movement ensures accurate timekeeping. Whether you’re heading to the office, a formal event, or a casual outing – this watch completes your outfit effortlessly.</p>

<h4 class="font-semibold mt-4">🔹 Key Features:</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Premium stainless steel body</li>
  <li>High-precision Quartz movement</li>
  <li>Stylish textured dial design</li>
  <li>Comfortable metal strap</li>
  <li>Durable & long-lasting build</li>
  <li>Perfect for daily use & special occasions</li>
</ul>
`,

        variants: [
            { color: "Silver Blue", img: "images/watch 3/BESTWIN Premium Quartz Watch/39ca82bc-fa7d-40da-9c30-ee4a83e998d5.jpg" },
            { color: "Black", img: "images/watch 3/BESTWIN Premium Quartz Watch/ce0ba20c-3793-4b38-a488-1de5b1701d78.jpg" },
            { color: "Silver Gold", img: "images/watch 3/BESTWIN Premium Quartz Watch/b734fb1e-a895-42b8-bec7-b7caf0e62aec.jpg" },
            { color: "Deep Blue", img: "images/watch 3/BESTWIN Premium Quartz Watch/cfff7c59-cd8e-44ab-b19d-2d94e242d1d1.jpg" },
        ],

        gallery: [
            "images/watch 3/BESTWIN Premium Quartz Watch/39ca82bc-fa7d-40da-9c30-ee4a83e998d5.jpg",
            "images/watch 3/BESTWIN Premium Quartz Watch/ce0ba20c-3793-4b38-a488-1de5b1701d78.jpg",
            "images/watch 3/BESTWIN Premium Quartz Watch/cfff7c59-cd8e-44ab-b19d-2d94e242d1d1.jpg",
            "images/watch 3/BESTWIN Premium Quartz Watch/b734fb1e-a895-42b8-bec7-b7caf0e62aec.jpg",
        ],
    },
    {
        id: 5,
        title: "Citizen Tsuyosa Automatic (AA Grade) – Premium Edition",

        price: 2700,          // Offer Price
        regularPrice: 3000,   // Regular Price

        short: "Integrated bracelet luxury aesthetic with automatic movement.",

        description: `
<p>Experience the iconic <strong>"Integrated Bracelet"</strong> luxury aesthetic without the luxury price tag. Our AA Grade Citizen Tsuyosa collection offers a near-perfect 1:1 look, featuring heavy-duty stainless steel, a smooth automatic movement, and the vibrant "Tiffany" and textured dials trending worldwide.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications (AA Grade)</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Size:</strong> 40mm (Perfect for all wrist sizes)</li>
  <li><strong>Case Thickness:</strong> 12mm</li>
  <li><strong>Movement:</strong> High-Quality Japanese Clone Automatic (Self-Winding / No Battery Needed)</li>
  <li><strong>Material:</strong> Premium 316L Solid Stainless Steel (Non-Fade)</li>
  <li><strong>Glass:</strong> Scratch-Resistant Hardened Mineral Crystal</li>
  <li><strong>Dial Features:</strong> Luminous Hands & Indices with Date Magnifier (Cyclops)</li>
  <li><strong>Caseback:</strong> Exhibition See-Through Back</li>
  <li><strong>Water Resistance:</strong> Splash Proof (Daily Wear)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color & Dial Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Sand-Textured Forest Green</li>
  <li>Sand-Textured Navy Blue</li>
  <li>Deep Matte Black</li>
  <li>Sunburst Gradient Teal</li>
  <li>Sand-Textured Burgundy</li>
</ul>

<h4 class="font-semibold mt-4">⭐ Key Features of Our AA Grade Quality</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>President-Style Bracelet:</strong> Heavy solid stainless steel build</li>
  <li><strong>Functional Cyclops:</strong> Accurate date magnifier alignment</li>
  <li><strong>Exhibition Back:</strong> Transparent caseback showing movement</li>
  <li><strong>Luminous Markers:</strong> Glows in low-light conditions</li>
</ul>

<h4 class="font-semibold mt-4">💎 Why Buy AA Grade?</h4>
<p>Our AA Grade watches are curated for enthusiasts who want the look and feel of a premium timepiece. From the weight of the steel to the smooth sweep of the automatic second hand, this is the best alternative for daily luxury wear.</p>

<h4 class="font-semibold mt-4">🛠 Care Instructions</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>If it stops, gently shake or wind the crown to restart.</li>
  <li>Avoid heavy chemicals or perfumes to maintain steel shine.</li>
</ul>
`,

        variants: [
            { color: "Forest Green", img: "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5444.JPG" },
            { color: "Navy Blue", img: "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5441.JPG" },
            { color: "Matte Black", img: "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5799.PNG" },
            { color: "Gradient Teal", img: "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5443.JPG" },
            { color: "Burgundy", img: "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5442.JPG" },
        ],

        gallery: [
            "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5444.JPG",
            "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5441.JPG",
            "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5799.PNG",
            "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5443.JPG",
            "images/watch 3/Citizen Tsuyosa Automatic (AA Grade)_/IMG_5442.JPG"
        ],
    },
    {
        id: 6,
        title: "Emporio Armani Chronograph (AA Grade)",

        price: 2250,          // Offer Price
        regularPrice: 2500,   // Regular Price

        short: "Premium mirror copy chronograph with full working sub-dials.",

        description: `
<h4 class="font-semibold">🔹 Product Description</h4>

<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Emporio Armani (AA Grade / Premium Mirror Copy)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog Chronograph (Full working sub-dials)</li>
  <li><strong>Strap Type:</strong> Bracelet</li>
  <li><strong>Strap Kind:</strong> Solid Stainless Steel / High-Gloss Ceramic Finish</li>
  <li><strong>Band Width:</strong> 22 mm</li>
  <li><strong>Diameter:</strong> 43 mm</li>
  <li><strong>Thickness:</strong> 11 mm – 12 mm</li>
  <li><strong>Weight:</strong> 160g – 185g</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Daily use-er jonno suitable)</li>
  <li><strong>Movement:</strong> High-Quality Quartz (Battery)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Full Black (Classic):</strong> Black case & chain, signature logo with red hands.</li>
  <li><strong>Silver & Black:</strong> Brushed silver case with tachymeter scale dial.</li>
  <li><strong>Blue Dial (Jubilee Chain):</strong> Deep blue dial with silver jubilee bracelet.</li>
  <li><strong>Ceramica Black:</strong> Glossy full black design with Roman numerals dial.</li>
</ul>
`,

        variants: [
            { color: "Full Black", img: "images/watch 3/Emporio Armani Chronograph (AA Grade)/c15ace03-f8ff-42cc-88f5-21515c382fd6.jpeg" },
            { color: "Silver & Black", img: "images/watch 3/Emporio Armani Chronograph (AA Grade)/563ade10-ba1e-4601-9b9c-934d481582f8.jpeg" },
            { color: "Blue Dial (Jubilee)", img: "images/watch 3/Emporio Armani Chronograph (AA Grade)/63b96b3a-3b00-4e12-8136-ff59a7c3945c.jpeg" },
            { color: "Ceramica Black", img: "images/watch 3/Emporio Armani Chronograph (AA Grade)/8e6afbae-52ee-478c-b310-d4559342ec32.jpeg" },
        ],

        gallery: [
            "images/watch 3/Emporio Armani Chronograph (AA Grade)/c15ace03-f8ff-42cc-88f5-21515c382fd6.jpeg",
            "images/watch 3/Emporio Armani Chronograph (AA Grade)/563ade10-ba1e-4601-9b9c-934d481582f8.jpeg",
            "images/watch 3/Emporio Armani Chronograph (AA Grade)/63b96b3a-3b00-4e12-8136-ff59a7c3945c.jpeg",
            "images/watch 3/Emporio Armani Chronograph (AA Grade)/8e6afbae-52ee-478c-b310-d4559342ec32.jpeg"
        ],
    },
    {
        id: 7,
        title: "Fossil Grant Chronograph Roman Dial Men's Watch (AA Grade)",

        price: 2205,          // Offer Price
        regularPrice: 2450,   // Regular Price

        short: "Classic Roman dial chronograph with premium stainless steel finish.",

        description: `
<h4 class="font-semibold">🔹 Product Description</h4>

<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Fossil (AA Grade / High-End Replica)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog Chronograph (All sub-dials functional)</li>
  <li><strong>Strap Type:</strong> Bracelet</li>
  <li><strong>Strap Material:</strong> Solid Stainless Steel</li>
  <li><strong>Band Width:</strong> 22 mm</li>
  <li><strong>Case Diameter:</strong> 44 mm</li>
  <li><strong>Case Thickness:</strong> 12 mm</li>
  <li><strong>Weight:</strong> 160g – 175g (Heavy & solid feel)</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Suitable for daily life use)</li>
  <li><strong>Movement:</strong> High-Quality Quartz (Battery powered)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Full Black</li>
  <li>Silver & Black</li>
  <li>Silver & Brown / Coffee</li>
  <li>Silver & Blue</li>
</ul>
`,

        variants: [
            { color: "Full Black", img: "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/773c183c-5304-4181-b985-afda0a4542fa.jpeg" },
            { color: "Silver & Black", img: "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/da17b647-ae0c-4fb8-8223-629436bdbb9b.jpeg" },
            { color: "Silver & Brown", img: "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/3149229d-80e1-48b5-a0e7-4545163b18c8.jpeg" },
            { color: "Silver & Blue", img: "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/5e7e71e3-2b34-4f97-890f-6e048187e698.jpeg" },
        ],

        gallery: [
            "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/773c183c-5304-4181-b985-afda0a4542fa.jpeg",
            "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/da17b647-ae0c-4fb8-8223-629436bdbb9b.jpeg",
            "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/3149229d-80e1-48b5-a0e7-4545163b18c8.jpeg",
            "images/watch 3/Fossil Grant Chronograph Roman Dial Men's Watch AA Grade/5e7e71e3-2b34-4f97-890f-6e048187e698.jpeg"
        ],
    },
    {
        id: 8,
        title: "Fossil Luxury Skeleton Automatic (AA Grade)",

        price: 2565,          // Offer Price
        regularPrice: 2850,   // Regular Price

        short: "Premium skeleton automatic watch with visible mechanical movement.",

        description: `
<p>Experience the perfect blend of classic horology and modern aesthetics. This premium Skeleton Automatic watch allows you to see the intricate mechanical movement in action. Crafted for those who appreciate premium craftsmanship and bold wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Build:</strong> High-quality 316L Stainless Steel case and bracelet</li>
  <li><strong>Movement:</strong> Fully Automatic Mechanical (Self-winding, no battery required)</li>
  <li><strong>Dial:</strong> Transparent skeleton design with Roman & numeric indices</li>
  <li><strong>Glass:</strong> Scratch-resistant Mineral Crystal</li>
  <li><strong>Clasp:</strong> Fold-over deployment clasp with push-button release</li>
  <li><strong>Water Resistance:</strong> Daily splash resistant</li>
</ul>

<h4 class="font-semibold mt-4">📏 Watch Dimensions</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Diameter:</strong> 44mm</li>
  <li><strong>Case Thickness:</strong> 12mm – 13mm</li>
  <li><strong>Band Width:</strong> 22mm</li>
  <li><strong>Wrist Fit:</strong> Adjustable stainless steel chain (removable links)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Silver & Black:</strong> Classic silver chain with deep black dial</li>
  <li><strong>Two-Tone Gold:</strong> Silver & gold chain with gold-accented black dial</li>
  <li><strong>Silver & Blue:</strong> Silver chain with royal blue dial</li>
</ul>
`,

        variants: [
            { color: "Silver & Black", img: "images/watch 3/Fossil Luxury Skeleton Automatic (AA Grade)/ba713d29-971b-414e-a4e1-5065719c8639.jpg" },
            { color: "Two-Tone Gold", img: "images/watch 3/Fossil Luxury Skeleton Automatic (AA Grade)/78c419c9-5e63-4527-b7c3-f95fdc332125.jpg" },
            { color: "Silver & Blue", img: "images/watch 3/Fossil Luxury Skeleton Automatic (AA Grade)/794387db-0820-469f-b7c2-5d15cf0cf8c4.jpg" },
        ],

        gallery: [
            "images/watch 3/Fossil Luxury Skeleton Automatic (AA Grade)/ba713d29-971b-414e-a4e1-5065719c8639.jpg",
            "images/watch 3/Fossil Luxury Skeleton Automatic (AA Grade)/78c419c9-5e63-4527-b7c3-f95fdc332125.jpg",
            "images/watch 3/Fossil Luxury Skeleton Automatic (AA Grade)/794387db-0820-469f-b7c2-5d15cf0cf8c4.jpg",
        ],
    },
    {
        id: 9,
        title: "Fossil Modern Machine & Nate Skeleton Automatic (AA Grade)",

        price: 2970,          // Offer Price
        regularPrice: 3300,   // Regular Price

        short: "Bold oversized skeleton automatic with heavy stainless steel build.",

        description: `
<p>The Fossil Modern Machine & Nate Skeleton Automatic delivers a bold, industrial-inspired design with a visible mechanical movement. Built for men who love oversized wrist presence and premium craftsmanship.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Fossil (AA Grade Replica)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog Skeleton Dial (Visible mechanical movement)</li>
  <li><strong>Strap Type:</strong> Bracelet Style</li>
  <li><strong>Strap Material:</strong> Solid Stainless Steel (High-quality coating)</li>
  <li><strong>Band Width:</strong> 24 mm</li>
  <li><strong>Case Diameter:</strong> 45 mm (Modern Machine) / 50 mm (Nate Model)</li>
  <li><strong>Case Thickness:</strong> 13 mm – 14 mm</li>
  <li><strong>Weight:</strong> 180g – 200g (Heavy & bold feel)</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Suitable for daily use)</li>
  <li><strong>Movement:</strong> Automatic Self-Winding (No battery required)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Full Black</li>
  <li>Silver & Black</li>
  <li>Nate Full Black</li>
</ul>
`,

        variants: [
            { color: "Full Black", img: "images/watch 3/Fossil Modern Machine & Nate Skeleton Automatic (AA Grade)/70356421-69e1-4484-8a93-b24d39812558.jpeg" },
            { color: "Silver & Black", img: "images/watch 3/Fossil Modern Machine & Nate Skeleton Automatic (AA Grade)/2b582c0a-9d9a-4b04-9cdb-219b0877be2c.jpeg" },
            { color: "Nate Full Black", img: "images/watch 3/Fossil Modern Machine & Nate Skeleton Automatic (AA Grade)/bc184b83-9637-42fd-be2e-162804a866ed.jpeg" },
        ],

        gallery: [
            "images/watch 3/Fossil Modern Machine & Nate Skeleton Automatic (AA Grade)/70356421-69e1-4484-8a93-b24d39812558.jpeg",
            "images/watch 3/Fossil Modern Machine & Nate Skeleton Automatic (AA Grade)/2b582c0a-9d9a-4b04-9cdb-219b0877be2c.jpeg",
            "images/watch 3/Fossil Modern Machine & Nate Skeleton Automatic (AA Grade)/bc184b83-9637-42fd-be2e-162804a866ed.jpeg",
        ],
    },
    {
        id: 10,
        title: "Fossil Townsman Chronograph Men's Watch (AA Grade)",

        price: 2205,          // Offer Price
        regularPrice: 2450,   // Regular Price

        short: "Classic chronograph design with dual sub-dials and stainless steel finish.",

        description: `
<p>The Fossil Townsman Chronograph blends timeless elegance with functional chronograph performance. Designed for men who prefer a classy yet bold wrist presence, this model features dual sub-dials and a premium stainless steel bracelet.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Fossil (AA Grade / High-End Replica)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog Chronograph (Dual functional sub-dials)</li>
  <li><strong>Strap Type:</strong> Bracelet Style</li>
  <li><strong>Strap Material:</strong> Solid Stainless Steel</li>
  <li><strong>Band Width:</strong> 22 mm</li>
  <li><strong>Case Diameter:</strong> 44 mm</li>
  <li><strong>Case Thickness:</strong> 12 mm</li>
  <li><strong>Weight:</strong> 165g – 180g (Solid premium feel)</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Suitable for daily use)</li>
  <li><strong>Movement:</strong> Quartz Chronograph (Battery powered)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Silver & Black</li>
  <li>Full Black</li>
</ul>
`,

        variants: [
            { color: "Silver & Black", img: "images/watch 3/Fossil Townsman Chronograph Men's Watch AA grade_/135b886d-5c4b-4422-b1d0-7c1508cb2f4c.jpeg" },
            { color: "Full Black", img: "images/watch 3/Fossil Townsman Chronograph Men's Watch AA grade_/ce32e190-2d67-4f7b-893e-2a10275d8769.jpeg" },
        ],

        gallery: [
            "images/watch 3/Fossil Townsman Chronograph Men's Watch AA grade_/135b886d-5c4b-4422-b1d0-7c1508cb2f4c.jpeg",
            "images/watch 3/Fossil Townsman Chronograph Men's Watch AA grade_/ce32e190-2d67-4f7b-893e-2a10275d8769.jpeg"
        ],
    },
    {
        id: 11,
        title: "Fossil Townsman Mechanical Skeleton Dial (AA Grade)",

        price: 2475,          // Offer Price
        regularPrice: 2750,   // Regular Price

        short: "Classic leather strap skeleton automatic with visible mechanical movement.",

        description: `
<p>The Fossil Townsman Mechanical Skeleton Dial combines timeless leather elegance with modern mechanical craftsmanship. Featuring a transparent skeleton dial, this watch allows you to admire the inner mechanical movement in action.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Fashion / Skeleton Replica (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog (Skeleton Design)</li>
  <li><strong>Strap Type:</strong> Classic Leather Strap</li>
  <li><strong>Strap Material:</strong> Synthetic Leather</li>
  <li><strong>Band Width:</strong> 22 mm</li>
  <li><strong>Case Diameter:</strong> 44 mm</li>
  <li><strong>Case Thickness:</strong> 12 mm</li>
  <li><strong>Weight:</strong> Approx. 80g – 90g (Light & comfortable)</li>
  <li><strong>Water Resistance:</strong> Basic Splash Resistant</li>
  <li><strong>Movement:</strong> Automatic / Mechanical (No battery required)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Black Leather</li>
  <li>Tan / Brown Leather</li>
  <li>Green Skeleton & Tan</li>
  <li>Blue Skeleton & Black</li>
</ul>
`,

        variants: [
            { color: "Black Leather", img: "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/1.jpg" },
            { color: "Tan Leather", img: "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/af70ad80-a750-48bc-8200-1e96acbaf953.jpg" },
            { color: "Green Skeleton & Tan", img: "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/5aae6e40-d67e-4f92-8cf6-880260bffec3.jpg" },
            { color: "Blue Skeleton & Black", img: "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/690299a3-5f68-4000-808e-c611f61eccd9.jpg" },
        ],

        gallery: [
            "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/1.jpg",
            "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/af70ad80-a750-48bc-8200-1e96acbaf953.jpg",
            "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/5aae6e40-d67e-4f92-8cf6-880260bffec3.jpg",
            "images/watch 3/Fossil Townsman Mechanical Skeleton Dial-AA Grade/690299a3-5f68-4000-808e-c611f61eccd9.jpg"
        ],
    },
    {
        id: 12,
        title: "Luxury Rolex Daytona Rainbow Edition (AA Grade)",

        price: 2385,          // Offer Price
        regularPrice: 2650,   // Regular Price

        short: "Iconic Rainbow Bezel chronograph with premium Oyster bracelet design.",

        description: `
<p>The Luxury Rolex Daytona Rainbow Edition (AA Grade) delivers bold luxury aesthetics with its iconic rainbow crystal bezel and premium stainless steel Oyster bracelet. Designed for those who want a standout wrist presence without the luxury price tag.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Premium Replica</li>
  <li><strong>Gender:</strong> Men / Gents</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog (Working Sub-dials & Date Function)</li>
  <li><strong>Strap Type:</strong> Bracelet (Oyster Design)</li>
  <li><strong>Strap Material:</strong> Solid Stainless Steel</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 40 mm</li>
  <li><strong>Case Thickness:</strong> 12.5 mm</li>
  <li><strong>Weight:</strong> Approx. 145g</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Daily Splash Resistant)</li>
  <li><strong>Movement:</strong> High-Quality Quartz (Battery Operated)</li>
</ul>

<h4 class="font-semibold mt-4">🌈 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Silver / Steel Case:</strong> Black dial with silver sub-dials & rainbow crystal bezel</li>
  <li><strong>Gold Case:</strong> Black dial with gold sub-dials & rainbow crystal bezel</li>
</ul>
`,

        variants: [
            { color: "Silver / Steel Case", img: "images/watch 3/Luxury Rolex Daytona Rainbow Edition (AA Grade)_/880dc252-75a3-45d3-922c-fd4ccc894d3a.jpeg" },
            { color: "Gold Case", img: "images/watch 3/Luxury Rolex Daytona Rainbow Edition (AA Grade)_/8a04d8e7-eaac-4c66-8ff3-a0972a272ae2.jpeg" },
        ],

        gallery: [
            "images/watch 3/Luxury Rolex Daytona Rainbow Edition (AA Grade)_/880dc252-75a3-45d3-922c-fd4ccc894d3a.jpeg",
            "images/watch 3/Luxury Rolex Daytona Rainbow Edition (AA Grade)_/8a04d8e7-eaac-4c66-8ff3-a0972a272ae2.jpeg"
        ],
    },
    {
        id: 13,
        title: "Omega Seamaster Diver 300M Edition (AA Grade)",

        price: 1799,          // Offer Price
        regularPrice: 1999,   // Regular Price

        short: "Wave-pattern diver edition with luminous dial and premium steel finish.",

        description: `
<p>The Omega Seamaster Diver 300M Edition (AA Grade) delivers a bold marine-inspired design with its iconic laser-engraved wave dial. Built for style and daily wear, this premium fashion replica offers a near-original feel in both weight and finishing.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Premium Fashion Replica (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog with Date (6 o'clock position)</li>
  <li><strong>Strap Type:</strong> Adjustable Bracelet</li>
  <li><strong>Strap Material:</strong> Stainless Steel</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 42 mm</li>
  <li><strong>Case Thickness:</strong> 13.5 mm</li>
  <li><strong>Weight:</strong> 155g – 165g (Close to original feel)</li>
  <li><strong>Water Resistance:</strong> Splash Resistant</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
  <li><strong>Glass:</strong> Hardened Mineral Glass (Scratch Resistant)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Special Features</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Wave Pattern Dial:</strong> Laser-engraved ocean wave texture</li>
  <li><strong>Luminous Hands & Markers:</strong> Glows in low-light conditions</li>
  <li><strong>Caseback:</strong> Military-style engraving (Bond Edition inspired)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Deep Ocean Blue</li>
  <li>Arctic White</li>
</ul>
`,

        variants: [
            { color: "Deep Ocean Blue", img: "images/watch 3/Omega Seamaster Diver 300M Edition AA grade/8c6e85f9-d121-4490-a0d7-06672d33f9fd.jpg" },
            { color: "Arctic White", img: "images/watch 3/Omega Seamaster Diver 300M Edition AA grade/8d46902e-058d-4d14-8822-d9ed5a3d8cd2.jpg" },
        ],

        gallery: [
            "images/watch 3/Omega Seamaster Diver 300M Edition AA grade/8c6e85f9-d121-4490-a0d7-06672d33f9fd.jpg",
            "images/watch 3/Omega Seamaster Diver 300M Edition AA grade/8d46902e-058d-4d14-8822-d9ed5a3d8cd2.jpg"
        ],
    },
    {
        id: 14,
        title: "Omega Speedmaster Flight Qualified (AA Grade)",

        price: 2385,          // Offer Price
        regularPrice: 2650,   // Regular Price

        short: "Aviation-inspired chronograph with dual sub-dials & flight-tip hand.",

        description: `
<p>The Omega Speedmaster Flight Qualified (AA Grade) is designed for those who love aviation-inspired timepieces. Featuring a bold chronograph layout with iconic blue-yellow horizon detailing and a signature orange flight-tip hand, this watch offers a sporty yet premium wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Premium Quality:</strong> AA Grade</li>
  <li><strong>Case Size:</strong> 42mm</li>
  <li><strong>Body & Bracelet:</strong> Full solid stainless steel with glossy-brushed finish</li>
  <li><strong>Dial Aesthetics:</strong> Dual sub-dial chronograph with blue-yellow horizon marker</li>
  <li><strong>Movement:</strong> High-quality precision movement</li>
  <li><strong>Glass:</strong> Scratch-resistant crystal-clear glass</li>
  <li><strong>Special Features:</strong> Working chronograph, date window (6 o'clock), signature orange flight-tip hand</li>
  <li><strong>Water Resistance:</strong> Daily splash resistant</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Chocolate Brown</li>
  <li>Midnight Blue</li>
  <li>Emerald Green</li>
  <li>Classic Black</li>
  <li>Arctic White</li>
</ul>
`,

        variants: [
            { color: "Chocolate Brown", img: "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/eba3670a-ccdb-4977-8203-c95c13bcd711.jpg" },
            { color: "Midnight Blue", img: "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/85db827a-4fbc-43d7-b5e7-3f39a7699dce.jpg" },
            { color: "Emerald Green", img: "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/d2e0f554-7ebd-42f6-a402-432d3d796108.jpg" },
            { color: "Classic Black", img: "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/fcad225b-3b0d-4bce-9ecd-57124b4589ee.jpg" },
            { color: "Arctic White", img: "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/a51b504e-03f5-4845-a963-8bc0444396ce.jpg" },
        ],

        gallery: [
            "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/eba3670a-ccdb-4977-8203-c95c13bcd711.jpg",
            "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/85db827a-4fbc-43d7-b5e7-3f39a7699dce.jpg",
            "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/d2e0f554-7ebd-42f6-a402-432d3d796108.jpg",
            "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/fcad225b-3b0d-4bce-9ecd-57124b4589ee.jpg",
            "images/watch 3/Omega Speedmaster Flight Qualified - AA Grade Edition/a51b504e-03f5-4845-a963-8bc0444396ce.jpg"
        ],
    },
    {
        id: 15,
        title: "Patek Philippe Complications Moonphase Skeleton (AA Grade)",

        price: 3600,          // Offer Price
        regularPrice: 4000,   // Regular Price

        short: "Luxury moonphase skeleton dial with automatic mechanical movement.",

        description: `
<p>The Patek Philippe Complications Moonphase Skeleton (AA Grade) is crafted for true watch enthusiasts who admire timeless luxury and mechanical artistry. Featuring a multifunctional skeleton dial with visible balance wheel and moonphase detailing, this piece reflects classic sophistication.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Luxury / Classic Replica (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog (Multifunctional Skeleton Dial)</li>
  <li><strong>Strap Type:</strong> Classic Leather Strap</li>
  <li><strong>Strap Material:</strong> Alligator Pattern Synthetic Leather</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 42 mm</li>
  <li><strong>Case Thickness:</strong> 13 mm</li>
  <li><strong>Weight:</strong> Approx. 85g – 95g (Lightweight & elegant)</li>
  <li><strong>Water Resistance:</strong> Basic Splash Resistant</li>
  <li><strong>Movement:</strong> Automatic / Mechanical (Visible Balance Wheel)</li>
</ul>

<h4 class="font-semibold mt-4">🌙 Special Features</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Moonphase complication display</li>
  <li>Visible mechanical balance wheel</li>
  <li>Elegant skeleton dial finishing</li>
  <li>Classic dress-watch aesthetic</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Black Majesty</li>
  <li>Golden Heritage</li>
  <li>Silver Classic</li>
</ul>
`,
        variants: [
            { color: "Black Majesty", img: "images/watch 3/Patek Philippe Complications Moonphase Skeleton-AA grade/572d5c00-7122-4f34-8dc2-83bd10e3cc60.jpg" },
            { color: "Golden Heritage", img: "images/watch 3/Patek Philippe Complications Moonphase Skeleton-AA grade/9d4035e8-3a7a-4047-9acd-6a890bd46f6e.jpg" },
            { color: "Silver Classic", img: "images/watch 3/Patek Philippe Complications Moonphase Skeleton-AA grade/2c73892e-9700-4a94-afac-fc6060616666.jpg" },
        ],

        gallery: [
            "images/watch 3/Patek Philippe Complications Moonphase Skeleton-AA grade/572d5c00-7122-4f34-8dc2-83bd10e3cc60.jpg",
            "images/watch 3/Patek Philippe Complications Moonphase Skeleton-AA grade/9d4035e8-3a7a-4047-9acd-6a890bd46f6e.jpg",
            "images/watch 3/Patek Philippe Complications Moonphase Skeleton-AA grade/2c73892e-9700-4a94-afac-fc6060616666.jpg",
        ],
    },
    {
        id: 16,
        title: "Patek Philippe Grand Complications Chronograph Edition (AA Grade)",

        price: 3150,          // Offer Price
        regularPrice: 3500,   // Regular Price

        short: "Elegant grand complications design with moonphase & day-date display.",

        description: `
<p>The Patek Philippe Grand Complications Chronograph Edition (AA Grade) reflects timeless luxury and formal elegance. Featuring a multifunctional dial with Day-Date and Moonphase display, this timepiece delivers a sophisticated and prestigious wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Luxury / Formal Replica (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog (Multifunctional with Day-Date & Moonphase)</li>
  <li><strong>Strap Type:</strong> Classic Leather Strap</li>
  <li><strong>Strap Material:</strong> Synthetic Leather with Alligator Texture</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 42 mm</li>
  <li><strong>Case Thickness:</strong> 13 mm</li>
  <li><strong>Weight:</strong> Approx. 85g – 95g (Elegant & lightweight)</li>
  <li><strong>Water Resistance:</strong> Basic Splash Resistant</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Key Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Moonphase complication display</li>
  <li>Day-Date window functionality</li>
  <li>Premium champagne-toned dial finishing</li>
  <li>Classic formal dress-watch aesthetic</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Golden Champagne & Black</li>
  <li>Golden Champagne & Grey</li>
</ul>
`,
        variants: [
            { color: "Golden Champagne & Black", img: "images/watch 3/Patek Philippe Grand Complications Chronograph Edition-AA Grade/8aa3be5c-90de-4a31-9486-803b09b36009.jpg" },
            { color: "Golden Champagne & Grey", img: "images/watch 3/Patek Philippe Grand Complications Chronograph Edition-AA Grade/78c3366d-4268-4623-b288-de27e6a8de7e.jpg" },
        ],

        gallery: [
            "images/watch 3/Patek Philippe Grand Complications Chronograph Edition-AA Grade/8aa3be5c-90de-4a31-9486-803b09b36009.jpg",
            "images/watch 3/Patek Philippe Grand Complications Chronograph Edition-AA Grade/78c3366d-4268-4623-b288-de27e6a8de7e.jpg"
        ],
    },
    {
        id: 17,
        title: "Rolex Cosmograph Daytona (AA Grade) – Oysterflex Edition",

        price: 2150,          // Offer Price
        regularPrice: 2350,   // Regular Price

        short: "Sporty Oysterflex chronograph with ceramic tachymeter bezel.",

        description: `
<p>The Rolex Cosmograph Daytona (AA Grade) delivers a bold luxury sports aesthetic with its black ceramic tachymeter bezel and premium Oysterflex-style rubber strap. Designed for everyday comfort and standout wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications (AA Grade)</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Model:</strong> Rolex Cosmograph Daytona Replica</li>
  <li><strong>Build Material:</strong> High-quality Stainless Steel Case</li>
  <li><strong>Strap:</strong> Premium Oysterflex-style black rubber/silicone (Flexible & durable)</li>
  <li><strong>Bezel:</strong> Black Ceramic-finish tachymeter bezel with engraved numbering</li>
  <li><strong>Glass:</strong> Scratch-resistant Mineral Crystal</li>
  <li><strong>Movement:</strong> High-quality Japanese Quartz (Battery operated)</li>
  <li><strong>Water Resistance:</strong> Splash-resistant (Not suitable for swimming/diving)</li>
</ul>

<h4 class="font-semibold mt-4">📏 Size & Dimensions</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Diameter:</strong> 40mm (Standard luxury size)</li>
  <li><strong>Case Thickness:</strong> Approx. 12mm – 13mm</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Available Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Rose Gold Case | Champagne Dial | Black Sub-dials</li>
  <li>Yellow Gold Case | Black Dial | Gold Sub-dials</li>
  <li>Rose Gold Case | Chocolate Brown Dial | Black Sub-dials</li>
  <li>Yellow Gold Case | White/Silver Dial | Gold Sub-dials</li>
  <li>Rose Gold Case | Black Dial | Grey/Silver Sub-dials</li>
  <li>Yellow Gold Case | Full Golden Dial | Black Sub-dials</li>
</ul>

<h4 class="font-semibold mt-4">⭐ Key Features</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>AA Grade Quality:</strong> Superior finishing, weight & detailing</li>
  <li><strong>Functional Sub-dials:</strong> Chronograph indicators (Day/Date or 24-hour display depending on variant)</li>
  <li><strong>Sport-Luxury Design:</strong> Ceramic bezel + Oysterflex strap combination</li>
</ul>
`,
        variants: [
            { color: "Rose Gold | Champagne Dial", img: "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/1ed9cce4-3f50-415e-8c3e-a9a39eb1a61f.jpg" },
            { color: "Yellow Gold | Black Dial", img: "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/a374d87d-eeb3-4981-9dd7-195b8f9e7899.jpg" },
            { color: "Rose Gold | Chocolate Dial", img: "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/b7a80452-e228-4aab-a22b-c68988b7c7fb.jpg" },
            { color: "Yellow Gold | White Dial", img: "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/50109d9d-a48b-4d08-8379-f24f63691352.jpg" },
            { color: "Rose Gold | Black Dial", img: "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/1f1a7758-4e1b-4c0e-b5f1-706e1cde42ec.jpg" },
            { color: "Yellow Gold | Golden Dial", img: "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/39664514-8ea3-447b-b392-e1a61cc8efbf.jpg" },
        ],

        gallery: [
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/1ed9cce4-3f50-415e-8c3e-a9a39eb1a61f.jpg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/a374d87d-eeb3-4981-9dd7-195b8f9e7899.jpg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/b7a80452-e228-4aab-a22b-c68988b7c7fb.jpg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/50109d9d-a48b-4d08-8379-f24f63691352.jpg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/1f1a7758-4e1b-4c0e-b5f1-706e1cde42ec.jpg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/39664514-8ea3-447b-b392-e1a61cc8efbf.jpg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/WhatsApp Image 2026-03-01 at 3.44.01 PM.jpeg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/WhatsApp Image 2026-03-01 at 3.44.02 PM (1).jpeg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/WhatsApp Image 2026-03-01 at 3.44.02 PM (2).jpeg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/WhatsApp Image 2026-03-01 at 3.44.02 PM.jpeg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/WhatsApp Image 2026-03-01 at 3.44.03 PM (1).jpeg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/WhatsApp Image 2026-03-01 at 3.44.03 PM (2).jpeg",
            "images/watch 3/Rolex Daytona (Oysterflex Edition) AA Grade watches_/WhatsApp Image 2026-03-01 at 3.44.03 PM.jpeg",
        ],
    },
    {
        id: 18,
        title: "Seiko 5 Sport (AA Grade)",

        price: 1620,          // Offer Price
        regularPrice: 1800,   // Regular Price

        short: "Rugged diver-style watch with matte black finish and rotating bezel.",

        description: `
<p>The Seiko 5 Sport (AA Grade) is a bold diver-style timepiece featuring a rugged matte black finish and sporty aesthetics. Designed for everyday durability with a strong wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Quality:</strong> AA Grade (Premium Master Copy)</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
  <li><strong>Strap Material:</strong> Black Coated Stainless Steel</li>
  <li><strong>Bezel:</strong> Rotating Diver-Style Bezel</li>
  <li><strong>Display:</strong> Day/Date Display</li>
  <li><strong>Markers:</strong> Luminous Hands & Hour Markers (Glows in low light)</li>
  <li><strong>Water Resistance:</strong> Splash Resistant (Daily use)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Full Matte Black with Black Dial</li>
  <li>Full Matte Black with Deep Blue Dial</li>
</ul>
`,
        variants: [
            { color: "Matte Black | Black Dial", img: "images/watch 3/Seiko 5 Sport (AA Grade)/08261e21-17ad-43fb-9aeb-8ff1de5ec14a.jpg" },
            { color: "Matte Black | Deep Blue Dial", img: "images/watch 3/Seiko 5 Sport (AA Grade)/51677fa0-22c3-403d-a4c5-bd55b11d406d.jpg" },
        ],

        gallery: [
            "images/watch 3/Seiko 5 Sport (AA Grade)/08261e21-17ad-43fb-9aeb-8ff1de5ec14a.jpg",
            "images/watch 3/Seiko 5 Sport (AA Grade)/51677fa0-22c3-403d-a4c5-bd55b11d406d.jpg"
        ],
    },
    {
        id: 19,
        title: "Seiko 5 Sports Diver Style Watch (AA Grade)",

        price: 1800,          // Offer Price
        regularPrice: 2000,   // Regular Price

        short: "Bold Monster-style diver with 100M rating and stainless steel build.",

        description: `
<p>The Seiko 5 Sports Diver Style (AA Grade) features a bold Monster/Bottle Cap case design with strong wrist presence. Built for sport-inspired daily wear, it combines durability, steel construction, and classic diver aesthetics.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Seiko (AA Grade Replica / Mod)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round (Monster / Bottle Cap Case)</li>
  <li><strong>Display Type:</strong> Analog with Day-Date Feature</li>
  <li><strong>Strap Type:</strong> Bracelet</li>
  <li><strong>Strap Material:</strong> Stainless Steel</li>
  <li><strong>Band Width:</strong> 22mm (Approx.)</li>
  <li><strong>Case Diameter:</strong> 44mm (Approx.)</li>
  <li><strong>Case Thickness:</strong> 13.5mm (Approx.)</li>
  <li><strong>Weight:</strong> 165g – 175g (Solid & heavy feel)</li>
  <li><strong>Water Resistance:</strong> 100M (Normal use; not recommended for professional diving)</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Light Blue Dial</li>
  <li>Black Dial</li>
</ul>
`,
        variants: [
            { color: "Light Blue Dial", img: "images/watch 3/Seiko 5 Sports Diver Style Watch (AA Grade)/e61fb185-d60d-426f-85ae-448fb269e8c7.jpg" },
            { color: "Black Dial", img: "images/watch 3/Seiko 5 Sports Diver Style Watch (AA Grade)/6fe1934d-19ca-4d36-b09f-317fca0abf10.jpg" },
        ],

        gallery: [
            "images/watch 3/Seiko 5 Sports Diver Style Watch (AA Grade)/e61fb185-d60d-426f-85ae-448fb269e8c7.jpg",
            "images/watch 3/Seiko 5 Sports Diver Style Watch (AA Grade)/6fe1934d-19ca-4d36-b09f-317fca0abf10.jpg"
        ],
    },
    {
        id: 20,
        title: 'Success Way "Textured Dial" Collection',

        price: 1620,          // Offer Price
        regularPrice: 1800,   // Regular Price

        short: "Modern integrated bracelet design with premium 3D textured dial.",

        description: `
<p>The Success Way "Textured Dial" Collection blends modern high-fashion aesthetics with a classic integrated bracelet design. Featuring a unique hammered / honeycomb textured dial, this series delivers a bold luxury look inspired by iconic designs like Royal Oak & PRX — at an affordable price.</p>

<h4 class="font-semibold mt-4">🔹 Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Success Way</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered) for precise timekeeping</li>
  <li><strong>Dial:</strong> High-definition 3D textured dial with applied hour markers</li>
  <li><strong>Case Material:</strong> Stainless Steel / Alloy (Brushed & polished finish)</li>
  <li><strong>Crystal:</strong> Scratch-resistant Mineral Glass</li>
  <li><strong>Water Resistance:</strong> 30M Water Resist (Hand washing & light rain only)</li>
  <li><strong>Functions:</strong> Analog time display with automatic Date window (3 o’clock)</li>
</ul>

<h4 class="font-semibold mt-4">📏 Size & Fit (Standard Men's Size)</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Diameter:</strong> Approx. 40mm – 42mm</li>
  <li><strong>Band Width:</strong> 20mm – 22mm (Integrated style)</li>
  <li><strong>Case Thickness:</strong> Approx. 11mm (Slim profile)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Available Colors</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Royal Brown & Gold</li>
  <li>Emerald Green</li>
  <li>Classic Silver-Black</li>
  <li>All-Black Stealth</li>
</ul>
`,
        variants: [
            { color: "Royal Brown & Gold", img: "images/watch 3/Success Way _Textured Dial_ Collection/5b357a8a-f6b9-48a0-bf12-6b140d477272.jpg" },
            { color: "Emerald Green", img: "images/watch 3/Success Way _Textured Dial_ Collection/7d939c4f-7dc8-4bcd-a63b-d6bc2a9d8eeb.jpg" },
            { color: "Classic Silver-Black", img: "images/watch 3/Success Way _Textured Dial_ Collection/22ea8521-52d6-49d9-a7fd-685b7a963559.jpg" },
            { color: "All-Black Stealth", img: "images/watch 3/Success Way _Textured Dial_ Collection/fe68e900-44e4-453a-9b81-f83b423b23c6.jpg" },
        ],

        gallery: [
            "images/watch 3/Success Way _Textured Dial_ Collection/5b357a8a-f6b9-48a0-bf12-6b140d477272.jpg",
            "images/watch 3/Success Way _Textured Dial_ Collection/7d939c4f-7dc8-4bcd-a63b-d6bc2a9d8eeb.jpg",
            "images/watch 3/Success Way _Textured Dial_ Collection/22ea8521-52d6-49d9-a7fd-685b7a963559.jpg",
            "images/watch 3/Success Way _Textured Dial_ Collection/fe68e900-44e4-453a-9b81-f83b423b23c6.jpg"
        ],
    },
    {
        id: 21,
        title: "Success Way Nautilus-Style Luxury Fashion Watch",

        price: 1575,          // Offer Price
        regularPrice: 1750,   // Regular Price

        short: "Rounded octagon luxury design with horizontal textured dial.",

        description: `
<p>The Success Way Nautilus-Style Luxury Watch delivers a premium fashion-forward aesthetic inspired by iconic integrated bracelet designs. Featuring a rounded octagon case and a horizontal textured dial pattern, this watch offers a bold yet refined wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Success Way</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Rounded Octagon</li>
  <li><strong>Display Type:</strong> Analog with Date</li>
  <li><strong>Strap Type:</strong> Integrated Link Bracelet</li>
  <li><strong>Strap Material:</strong> Stainless Steel</li>
  <li><strong>Band Width:</strong> Approx. 22mm</li>
  <li><strong>Case Diameter:</strong> Approx. 40mm</li>
  <li><strong>Case Thickness:</strong> Approx. 11mm (Slim profile)</li>
  <li><strong>Weight:</strong> Approx. 135g</li>
  <li><strong>Water Resistance:</strong> Daily Splash Proof</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Dial Texture:</strong> Horizontal “garage door” embossing with subtle integrated logo pattern</li>
  <li><strong>Finishing:</strong> Brushed bezel top with polished edge contrast for a luxury appearance</li>
  <li><strong>Integrated Bracelet:</strong> Seamless sporty-luxury fit</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Full Gold Case with White Dial</li>
  <li>Full Gold Case with Black Dial</li>
  <li>Full Silver Case with Black Dial</li>
  <li>Full Silver Case with Tiffany Blue Dial</li>
  <li>Full Silver Case with White Dial & Blue Hands</li>
  <li>Two-Tone (Gold/Silver) Case with Black Dial</li>
  <li>Two-Tone (Gold/Silver) Case with Emerald Green Dial</li>
</ul>
`,
        variants: [
            { color: "Gold | White Dial", img: "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/19a7900f-6361-4713-8766-1afb45db5b39.jpg" },
            { color: "Gold | Black Dial", img: "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/2-27b5-4f10-937d-45862df72311.jpg" },
            { color: "Silver | Black Dial", img: "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/1ab62a0d-48d1-40ca-9e84-edee44533036.jpg" },
            { color: "Silver | Tiffany Blue", img: "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/1ac7be9f-3465-4071-a5ce-4373fdf11ddc.jpg" },
            { color: "Silver | White Dial & Blue Hands", img: "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/a869191b-6bc5-468e-a6a4-4f0b2eb1bf47.jpg" },
            { color: "Two-Tone | Black Dial", img: "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/70038ab7-7577-44e4-b4f1-6d0f8de3b6d5.jpg" },
            { color: "Two-Tone | Emerald Green", img: "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/99ad0c25-e2ad-4a69-9a76-ea63c3ac7171.jpg" },
        ],

        gallery: [
            "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/19a7900f-6361-4713-8766-1afb45db5b39.jpg",
            "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/2-27b5-4f10-937d-45862df72311.jpg",
            "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/1ab62a0d-48d1-40ca-9e84-edee44533036.jpg",
            "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/1ac7be9f-3465-4071-a5ce-4373fdf11ddc.jpg",
            "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/a869191b-6bc5-468e-a6a4-4f0b2eb1bf47.jpg",
            "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/70038ab7-7577-44e4-b4f1-6d0f8de3b6d5.jpg",
            "images/watch 3/Success Way Nautilus-Style Luxury Fashion Watch/99ad0c25-e2ad-4a69-9a76-ea63c3ac7171.jpg"
        ],
    },
    {
        id: 22,
        title: "Tissot 1853 AA Grade Chronograph Collection",

        price: 2340,          // Offer Price
        regularPrice: 2600,   // Regular Price

        short: "Premium stainless steel chronograph with tachymeter bezel & 3 sub-dials.",

        description: `
<p>The Tissot 1853 AA Grade Chronograph Collection delivers a sporty-luxury aesthetic with a bold tachymeter bezel and fully functional chronograph sub-dials. Designed for men who appreciate precision, heavy build quality, and timeless styling.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications (AA Grade)</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Quality:</strong> AA Grade (Premium Master Copy)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Movement:</strong> High-Quality Quartz</li>
  <li><strong>Display:</strong> Full Analog with Functional Chronograph</li>
  <li><strong>Case & Strap:</strong> Solid Stainless Steel</li>
  <li><strong>Bezel:</strong> Fixed Black Tachymeter Bezel</li>
  <li><strong>Features:</strong> Working 3 Sub-dials, Date Display</li>
  <li><strong>Weight:</strong> Heavy premium feel</li>
  <li><strong>Water Resistance:</strong> Splash Resistant (Daily use)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Silver & Gold Mixed Strap with White Dial</li>
  <li>Full Silver Strap with Blue Dial</li>
  <li>Silver & Gold Mixed Strap with Blue Dial</li>
  <li>Silver & Gold Mixed Strap with Full Black Dial</li>
</ul>
`,
        variants: [
            { color: "Silver & Gold | White Dial", img: "images/watch 3/Tissot 1853 AA Grade Chronograph collection/3fff16ad-9e14-4216-a666-79995376fb84.jpg" },
            { color: "Full Silver | Blue Dial", img: "images/watch 3/Tissot 1853 AA Grade Chronograph collection/81e79933-b5b2-4cea-87a7-cbdaf01745d0.jpg" },
            { color: "Silver & Gold | Blue Dial", img: "images/watch 3/Tissot 1853 AA Grade Chronograph collection/49e44b4a-bb5e-44f4-af89-8f26da108c05.jpg" },
            { color: "Silver & Gold | Black Dial", img: "images/watch 3/Tissot 1853 AA Grade Chronograph collection/f1281159-441f-4276-8e01-bf19c50accbc.jpg" },
        ],

        gallery: [
            "images/watch 3/Tissot 1853 AA Grade Chronograph collection/3fff16ad-9e14-4216-a666-79995376fb84.jpg",
            "images/watch 3/Tissot 1853 AA Grade Chronograph collection/81e79933-b5b2-4cea-87a7-cbdaf01745d0.jpg",
            "images/watch 3/Tissot 1853 AA Grade Chronograph collection/49e44b4a-bb5e-44f4-af89-8f26da108c05.jpg",
            "images/watch 3/Tissot 1853 AA Grade Chronograph collection/f1281159-441f-4276-8e01-bf19c50accbc.jpg"
        ],
    },
    {
        id: 23,
        title: "Tommy Hilfiger James Men's Watch",

        price: 4000,          // Offer Price
        regularPrice: 4450,   // Regular Price

        short: "Slim minimalist stainless steel design with modern gray-black dial.",

        description: `
<p>The Tommy Hilfiger James Men's Watch delivers a sleek and minimalist design perfect for modern everyday styling. With its slim 6mm profile and lightweight build, this timepiece offers both elegance and comfort.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand Kind:</strong> Tommy Hilfiger James</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog</li>
  <li><strong>Dial Color:</strong> Gray & Black</li>
  <li><strong>Strap Type:</strong> Metal Bracelet</li>
  <li><strong>Strap Color:</strong> Silver & Black</li>
  <li><strong>Strap Material:</strong> Stainless Steel</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 40 mm</li>
  <li><strong>Case Thickness:</strong> 6 mm (Ultra Slim Profile)</li>
  <li><strong>Weight:</strong> Approx. 71 grams (Lightweight & comfortable)</li>
  <li><strong>Water Resistance:</strong> 30 Meters (Daily splash resistant)</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Modern minimalist aesthetic</li>
  <li>Signature Tommy Hilfiger styling</li>
  <li>Slim & elegant wrist presence</li>
  <li>Comfortable stainless steel bracelet</li>
</ul>
`,
        variants: [
            { color: "Gray & Black Dial | Silver & Black Strap", img: "images/watch 3/Tommy Hilfiger/2.jpg" }
        ],

        gallery: [
            "images/watch 3/Tommy Hilfiger/1.jpg",
            "images/watch 3/Tommy Hilfiger/706f8846-61ba-4399-9f9a-5768bc83552e.jpg",
            "images/watch 3/Tommy Hilfiger/8.jpg",
            "images/watch 3/Tommy Hilfiger/3.jpg",
            "images/watch 3/Tommy Hilfiger/4.jpg",
            "images/watch 3/Tommy Hilfiger/5.jpg",
            "images/watch 3/Tommy Hilfiger/6f9c31da-e3ac-49ee-b305-22c2b71faa1f.jpg",
        ],
    },
    {
        id: 24,
        title: "Universe Point (Octagonal / PRX Style)",

        price: 1485,          // Offer Price
        regularPrice: 1650,   // Regular Price

        short: "Ultra-slim octagonal design with modern PRX-style aesthetics.",

        description: `
<p>The Universe Point Octagonal / PRX Style watch blends modern elegance with a bold geometric case design. Featuring a sleek ultra-slim profile and clean analog display, this watch is perfect for stylish daily wear.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Universe Point</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Octagonal Case</li>
  <li><strong>Display Type:</strong> Analog</li>
  <li><strong>Strap Type:</strong> Leather Strap / Silicone</li>
  <li><strong>Strap Material:</strong> High Quality Durable Strap</li>
  <li><strong>Band Width:</strong> 22 mm</li>
  <li><strong>Case Diameter:</strong> 42 mm</li>
  <li><strong>Case Thickness:</strong> 6 mm – 10 mm (Ultra-Slim Profile)</li>
  <li><strong>Water Resistance:</strong> Water Resistant (Daily use)</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Blue Dial:</strong> Deep blue dial with black leather strap</li>
  <li><strong>Grey Dial:</strong> Grey dial with gold-tone octagonal bezel</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>PRX-inspired integrated look</li>
  <li>Bold octagonal bezel design</li>
  <li>Slim & lightweight wrist presence</li>
  <li>Modern minimalist styling</li>
</ul>
`,
        variants: [
            { color: "Blue Dial | Black Strap", img: "images/watch 3/Universe Point (Octagonal-PRX Style)/e30730c6-b7a0-44c1-bab9-1557c1c2a32d.jpeg" },
            { color: "Grey Dial | Gold Bezel", img: "images/watch 3/Universe Point (Octagonal-PRX Style)/80d093e0-1074-43a5-9ab1-d816e6ad70c2.jpeg" },
        ],

        gallery: [
            "images/watch 3/Universe Point (Octagonal-PRX Style)/e30730c6-b7a0-44c1-bab9-1557c1c2a32d.jpeg",
            "images/watch 3/Universe Point (Octagonal-PRX Style)/80d093e0-1074-43a5-9ab1-d816e6ad70c2.jpeg"
        ],
    },
    {
        id: 25,
        title: "Universe Point Arabic Edition",

        price: 1485,          // Offer Price
        regularPrice: 1650,   // Regular Price

        short: "Elegant Arabic numeral dial with sleek octagonal D-shape design.",

        description: `
<p>The Universe Point Arabic Edition is designed for those who appreciate unique dial aesthetics. Featuring bold Arabic numerals and a sleek octagonal (D-Shape) case, this watch delivers a refined yet modern wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Universe Point</li>
  <li><strong>Gender:</strong> Men / Gents</li>
  <li><strong>Watch Shape:</strong> Octagonal (D-Shape)</li>
  <li><strong>Display Type:</strong> Analog (Unique Arabic Index)</li>
  <li><strong>Strap Type:</strong> Leather Strap</li>
  <li><strong>Strap Material:</strong> Crocodile-textured Premium Leather</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 40 mm</li>
  <li><strong>Case Thickness:</strong> 8.5 mm (Sleek Profile)</li>
  <li><strong>Weight:</strong> Approx. 65g (Lightweight & comfortable)</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Daily Splash Resistant)</li>
  <li><strong>Movement:</strong> High-Precision Japan Quartz</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Full Black Arabic:</strong> Black case, black dial, black Arabic numerals, black leather strap</li>
  <li><strong>Silver / Grey Arabic:</strong> Silver case, off-white dial, black Arabic numerals, grey leather strap</li>
  <li><strong>Black / White Arabic:</strong> Black case, white dial, black Arabic numerals, black leather strap</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Bold Arabic numeral styling</li>
  <li>Octagonal D-shape modern case</li>
  <li>Slim & lightweight profile</li>
  <li>Premium crocodile-textured leather strap</li>
</ul>
`,
        variants: [
            { color: "Full Black Arabic", img: "images/watch 3/Universe Point Arabic Edition_/c205eb46-eb89-4cf6-ba57-4cf60be12fdf.jpeg" },
            { color: "Silver / Grey Arabic", img: "images/watch 3/Universe Point Arabic Edition_/IMG_5813.png" },
            { color: "Black / White Arabic", img: "images/watch 3/Universe Point Arabic Edition_/deb5884e-4249-47e6-8be1-f659560aafe2.jpeg" },
        ],

        gallery: [
            "images/watch 3/Universe Point Arabic Edition_/c205eb46-eb89-4cf6-ba57-4cf60be12fdf.jpeg",
            "images/watch 3/Universe Point Arabic Edition_/IMG_5813.png",
            "images/watch 3/Universe Point Arabic Edition_/deb5884e-4249-47e6-8be1-f659560aafe2.jpeg",
        ],
    },
    {
        id: 26,
        title: "Universe Point Classic Octo Minimalist Watch",

        price: 1620,          // Offer Price
        regularPrice: 1800,   // Regular Price

        short: "Clean octagonal minimalist design with flat link stainless steel bracelet.",

        description: `
<p>The Universe Point Classic Octo Minimalist Watch combines modern geometric styling with a clean minimalist dial. Featuring a bold octagonal case and flat link bracelet, this model delivers a sleek everyday luxury look.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Universe Point</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Octagonal</li>
  <li><strong>Display Type:</strong> Analog</li>
  <li><strong>Strap Type:</strong> Flat Link Bracelet</li>
  <li><strong>Strap Material:</strong> Stainless Steel</li>
  <li><strong>Case Diameter:</strong> Approx. 40mm</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
  <li><strong>Water Resistance:</strong> Daily Splash Resistant</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Bold geometric octagonal bezel</li>
  <li>Minimal dial layout for clean aesthetic</li>
  <li>Comfortable flat-link integrated bracelet</li>
  <li>Lightweight & versatile everyday wear</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Silver Case with White Dial</li>
  <li>Silver Case with Black Dial</li>
</ul>
`,
        variants: [
            { color: "Silver | White Dial", img: "images/watch 3/Universe Point Classic Octo Minimalist Watch/fcf324b3-d323-469a-b395-1ba6679a7f41.jpg" },
            { color: "Silver | Black Dial", img: "images/watch 3/Universe Point Classic Octo Minimalist Watch/23c7e24e-ad0e-4847-853b-18b664fb3d79.jpg" },
        ],

        gallery: [
            "images/watch 3/Universe Point Classic Octo Minimalist Watch/fcf324b3-d323-469a-b395-1ba6679a7f41.jpg",
            "images/watch 3/Universe Point Classic Octo Minimalist Watch/23c7e24e-ad0e-4847-853b-18b664fb3d79.jpg"
        ],
    },
    {
        id: 27,
        title: "Universe Point Luxury Slim Edition",

        price: 1485,          // Offer Price
        regularPrice: 1650,   // Regular Price

        short: "Ultra-slim octagonal design with premium textured leather strap.",

        description: `
<p>The Universe Point Luxury Slim Edition is crafted for those who appreciate refined elegance and minimal styling. With its ultra-slim 8mm profile and premium textured leather strap, this watch delivers a sleek and lightweight wrist presence.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Universe Point</li>
  <li><strong>Gender:</strong> Men / Gents</li>
  <li><strong>Watch Shape:</strong> Octagonal</li>
  <li><strong>Display Type:</strong> Analog (Minimalist Look)</li>
  <li><strong>Strap Type:</strong> Leather Strap</li>
  <li><strong>Strap Material:</strong> Premium Textured Leather</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 40 mm</li>
  <li><strong>Case Thickness:</strong> 8 mm (Ultra Slim Design)</li>
  <li><strong>Weight:</strong> Approx. 60g (Lightweight & comfortable)</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Daily Splash Resistant)</li>
  <li><strong>Movement:</strong> High-Quality Quartz</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Green Variant:</strong> Brushed silver case, deep green dial, green croco strap</li>
  <li><strong>Silver / Black Variant:</strong> Matte silver case, black dial, black textured strap</li>
  <li><strong>Full Black Variant:</strong> All black matte finish with black dial & strap</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Ultra-slim luxury profile (8mm)</li>
  <li>Modern octagonal bezel design</li>
  <li>Premium textured leather finish</li>
  <li>Lightweight & elegant everyday wear</li>
</ul>
`,
        variants: [
            { color: "Green Variant", img: "images/watch 3/Universe Point Luxury Slim Edition_/0f1a6473-9f0d-4152-92e5-76b41eb3b91c.jpeg" },
            { color: "Silver / Black Variant", img: "images/watch 3/Universe Point Luxury Slim Edition_/09c0bd9f-ada1-4862-bef7-ca9887db84c4.jpeg" },
            { color: "Full Black Variant", img: "images/watch 3/Universe Point Luxury Slim Edition_/1c30e775-d42c-497f-bbc3-4ce809a0c718.jpeg" },
        ],

        gallery: [
            "images/watch 3/Universe Point Luxury Slim Edition_/0f1a6473-9f0d-4152-92e5-76b41eb3b91c.jpeg",
            "images/watch 3/Universe Point Luxury Slim Edition_/09c0bd9f-ada1-4862-bef7-ca9887db84c4.jpeg",
            "images/watch 3/Universe Point Luxury Slim Edition_/1c30e775-d42c-497f-bbc3-4ce809a0c718.jpeg",
        ],
    },
    {
        id: 28,
        title: "Universe Point Octagonal Luxury Men's Dress Watch",

        price: 1575,          // Offer Price
        regularPrice: 1750,   // Regular Price

        short: "Multi-faceted octagonal geometric design with integrated steel bracelet.",

        description: `
<p>The Universe Point Octagonal Luxury Dress Watch features a bold multi-faceted geometric octagon case paired with a clean analog dial. Designed for modern formal styling, this timepiece offers a balanced mix of sharp edges and polished finishing.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Universe Point</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Multi-faceted Octagon (Geometric Design)</li>
  <li><strong>Display Type:</strong> Analog</li>
  <li><strong>Strap Type:</strong> Integrated Link Bracelet</li>
  <li><strong>Strap Material:</strong> Stainless Steel</li>
  <li><strong>Band Width:</strong> Approx. 22mm</li>
  <li><strong>Case Diameter:</strong> Approx. 41mm</li>
  <li><strong>Case Thickness:</strong> Approx. 11mm</li>
  <li><strong>Weight:</strong> Approx. 140g (Solid & premium feel)</li>
  <li><strong>Water Resistance:</strong> Daily Splash Resistant</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Sharp multi-faceted geometric bezel</li>
  <li>Integrated stainless steel bracelet</li>
  <li>Clean minimalist dial layout</li>
  <li>Perfect for office & formal wear</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Silver Case/Strap with Black Dial (Silver markers)</li>
  <li>Silver Case/Strap with White/Silver Dial (Black markers)</li>
  <li>Silver Case/Strap with Grey/Gunmetal Dial (Silver markers)</li>
</ul>
`,
        variants: [
            { color: "Silver | Black Dial", img: "images/watch 3/Universe Point Octagonal Luxury Men's Dress Watch/cbbc95ef-3589-4f82-a074-7304d91cb1f3.jpg" },
            { color: "Silver | White Dial", img: "images/watch 3/Universe Point Octagonal Luxury Men's Dress Watch/3e8a9305-c457-4c36-98d7-363c5b62a7ab.jpg" },
            { color: "Silver | Grey Dial", img: "images/watch 3/Universe Point Octagonal Luxury Men's Dress Watch/2c6d97d4-4774-4013-8d7d-bec7dcd0cbd7.jpg" },
        ],

        gallery: [
            "images/watch 3/Universe Point Octagonal Luxury Men's Dress Watch/cbbc95ef-3589-4f82-a074-7304d91cb1f3.jpg",
            "images/watch 3/Universe Point Octagonal Luxury Men's Dress Watch/3e8a9305-c457-4c36-98d7-363c5b62a7ab.jpg",
            "images/watch 3/Universe Point Octagonal Luxury Men's Dress Watch/2c6d97d4-4774-4013-8d7d-bec7dcd0cbd7.jpg",
        ],
    },
    {
        id: 29,
        title: "Universe Point Patterned Dial Dress Watch",

        price: 1485,          // Offer Price
        regularPrice: 1650,   // Regular Price

        short: "Elegant patterned dial with fluted bezel & genuine leather strap.",

        description: `
<p>The Universe Point Patterned Dial Dress Watch delivers a refined and elegant look with its beautifully textured dial and classic fluted bezel design. Perfect for formal occasions and modern daily styling.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Universe Point</li>
  <li><strong>Gender:</strong> Men / Unisex</li>
  <li><strong>Watch Shape:</strong> Round (Fluted Bezel)</li>
  <li><strong>Display Type:</strong> Analog</li>
  <li><strong>Strap Type:</strong> Leather Strap</li>
  <li><strong>Strap Material:</strong> Genuine Leather (Croc Pattern)</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 40 mm</li>
  <li><strong>Case Thickness:</strong> 10 mm (Thin & Sleek)</li>
  <li><strong>Water Resistance:</strong> Splash Resistant</li>
  <li><strong>Movement:</strong> Quartz (Battery Powered)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Patterned textured dial finish</li>
  <li>Classic fluted bezel styling</li>
  <li>Premium croc-pattern genuine leather strap</li>
  <li>Slim & elegant dress watch profile</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Deep Green:</strong> Green dial with matching green leather strap</li>
  <li><strong>Pure White:</strong> White patterned dial with black leather strap</li>
</ul>
`,
        variants: [
            { color: "Deep Green", img: "images/watch 3/Universe Point Patterned Dial Dress Watch/2013b180-295c-472d-b54e-62b3244fec7e.jpeg" },
            { color: "Pure White", img: "images/watch 3/Universe Point Patterned Dial Dress Watch/a6461f8c-079d-4787-9f32-e3a3b24dd6b5.jpeg" },
        ],

        gallery: [
            "images/watch 3/Universe Point Patterned Dial Dress Watch/2013b180-295c-472d-b54e-62b3244fec7e.jpeg",
            "images/watch 3/Universe Point Patterned Dial Dress Watch/a6461f8c-079d-4787-9f32-e3a3b24dd6b5.jpeg"
        ],
    },
    {
        id: 30,
        title: "Universe Point Premium Leather Edition",

        price: 1485,          // Offer Price
        regularPrice: 1650,   // Regular Price

        short: "Ultra-slim octagonal leather edition with Arabic, Roman & minimalist dial options.",

        description: `
<p>The Universe Point Premium Leather Edition is crafted for men who appreciate elegance with versatility. Featuring an ultra-slim octagonal (D-Shape) case and premium crocodile-textured leather strap, this watch blends classic styling with modern refinement.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Universe Point (Original Brand)</li>
  <li><strong>Gender:</strong> Men / Gents</li>
  <li><strong>Watch Shape:</strong> Octagonal / D-Shape</li>
  <li><strong>Display Type:</strong> Analog (Arabic, Roman & Minimalist Dial Options)</li>
  <li><strong>Strap Type:</strong> Leather Strap</li>
  <li><strong>Strap Material:</strong> Premium Textured / Crocodile Pattern Leather</li>
  <li><strong>Band Width:</strong> 20 mm</li>
  <li><strong>Case Diameter:</strong> 40 mm</li>
  <li><strong>Case Thickness:</strong> 8.5 mm (Ultra Slim Profile)</li>
  <li><strong>Weight:</strong> Approx. 65g (Lightweight & comfortable)</li>
  <li><strong>Water Resistance:</strong> 3 ATM (Daily Splash Resistant)</li>
  <li><strong>Movement:</strong> High-Quality Japan Quartz</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Ultra-slim elegant profile</li>
  <li>Premium croc-textured leather finish</li>
  <li>Arabic, Roman & minimalist dial options</li>
  <li>Modern octagonal luxury design</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color & Dial Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Black Case + Black Dial</li>
  <li>Black Case + White Dial</li>
  <li>Silver Case + Silver Sunray Dial</li>
</ul>
`,
        variants: [
            { color: "Black Case | Black Dial", img: "images/watch 3/Universe Point Premium Leather Edition/94127712-779f-4d1b-990e-d9add09a366d.jpeg" },
            { color: "Black Case | White Dial", img: "images/watch 3/Universe Point Premium Leather Edition/27d1e40f-ca4b-4339-9a47-d3d1def835c2.jpeg" },
            { color: "Silver Case | Silver Sunray Dial", img: "images/watch 3/Universe Point Premium Leather Edition/d4d2f12a-d65b-45dc-8314-26da081813fa.jpeg" },
        ],

        gallery: [
            "images/watch 3/Universe Point Premium Leather Edition/94127712-779f-4d1b-990e-d9add09a366d.jpeg",
            "images/watch 3/Universe Point Premium Leather Edition/27d1e40f-ca4b-4339-9a47-d3d1def835c2.jpeg",
            "images/leather30-3.jpg",
        ],
    },
    {
        id: 31,
        title: "Hublot Big Bang Skeleton Chronograph - Sky Blue Edition",

        price: 2250,          // Offer Price
        regularPrice: 2500,   // Regular Price

        short: "Bold 44mm skeleton chronograph with hybrid sky blue sport strap.",

        description: `
<p>The Hublot Big Bang Skeleton Chronograph – Sky Blue Edition delivers an aggressive sporty presence with its signature Big Bang case design and skeletonized dial. Designed for bold wrist impact, this model combines luxury aesthetics with modern chronograph functionality.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Hublot (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round (Signature Big Bang Design)</li>
  <li><strong>Display Type:</strong> Analog Skeleton Dial</li>
  <li><strong>Movement:</strong> Quartz Chronograph (Battery Operated)</li>
  <li><strong>Case Diameter:</strong> 44mm – 45mm</li>
  <li><strong>Case Thickness:</strong> 14mm – 15mm</li>
  <li><strong>Band Width:</strong> Approx. 24mm – 27mm</li>
  <li><strong>Weight:</strong> Approx. 120g – 150g</li>
  <li><strong>Water Resistance:</strong> Splash Resistant (Daily use only)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design & Build Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Case Finish:</strong> Matte Grey / Sandblasted Titanium look</li>
  <li><strong>Dial:</strong> Black skeleton dial with Sky Blue markers & indices</li>
  <li><strong>Strap:</strong> Hybrid strap (Rubber base + Sky Blue suede/Alcantara top)</li>
  <li><strong>Clasp:</strong> Deployment buckle (Fold-over clasp)</li>
  <li>Functional chronograph sub-dials</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variant</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Matte Grey Case | Black Skeleton Dial | Sky Blue Hybrid Strap</li>
</ul>
`,
        variants: [
            { color: "Sky Blue Edition", img: "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/309558bd-eaa9-4ee3-9324-7874e0af00fd.jpg" }
        ],

        gallery: [
            "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/309558bd-eaa9-4ee3-9324-7874e0af00fd.jpg",
            "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/1e981f60-c09a-4899-8e67-9fedeaba6b01.jpg",
            "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/6b339d86-a730-4122-9c31-b03dac1a9c3c.jpg",
            "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/7deec634-153f-422a-8a2d-b1d483b5926c.jpg",
            "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/904ca946-cbf7-4561-820f-d5c8bc0b27f1.jpg",
            "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/9bfba31e-95ef-4e58-8b1b-8780958708cb.jpg",
            "images/watch 3/Hublot Big Bang Skeleton Chronograph - Sky Blue Edition/a0774c1b-47ab-45f9-a1e3-299019f26e9b.jpg"
        ],
    },
    {
        id: 32,
        title: "Hublot Classic Fusion Automatic Men’s Luxury Watch (AA Grade)",

        price: 2475,          // Offer Price
        regularPrice: 2750,   // Regular Price

        short: "Premium automatic luxury watch with signature bolt bezel & hybrid strap.",

        description: `
<p>The Hublot Classic Fusion Automatic delivers a refined luxury presence with its signature bolt bezel design and slim profile case. Powered by a self-winding automatic movement, this timepiece blends elegance with mechanical craftsmanship.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Hublot (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round (Signature Bolt Bezel Design)</li>
  <li><strong>Display Type:</strong> Analog</li>
  <li><strong>Movement:</strong> Automatic (Self-Winding – No Battery Required)</li>
  <li><strong>Case Diameter:</strong> 42mm / 45mm</li>
  <li><strong>Case Thickness:</strong> 10mm (Slim Luxury Profile)</li>
  <li><strong>Band Width:</strong> 24mm</li>
  <li><strong>Weight:</strong> Approx. 95g – 110g</li>
  <li><strong>Water Resistance:</strong> Splash Resistant (Hand wash & rain only)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Build & Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Signature Hublot bolt-style bezel screws</li>
  <li>Premium hybrid leather & rubber strap</li>
  <li>Deployment buckle (Fold-over clasp)</li>
  <li>Slim elegant luxury wrist presence</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Silver Blue</li>
  <li>Rose Gold White</li>
  <li>Rose Gold Blue</li>
</ul>
`,
        variants: [
            { color: "Silver Blue", img: "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/d8afd0bc-986e-42fb-96ef-e140edf34914.jpg" },
            { color: "Rose Gold White", img: "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/10cf752b-9413-4629-b93f-9f8fee9f666d.jpg" },
            { color: "Rose Gold Blue", img: "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/4cd8506e-0949-48c0-b92a-051cc3910649.jpg" },
        ],

        gallery: [
            "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/d8afd0bc-986e-42fb-96ef-e140edf34914.jpg",
            "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/10cf752b-9413-4629-b93f-9f8fee9f666d.jpg",
            "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/4cd8506e-0949-48c0-b92a-051cc3910649.jpg",
            "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/949e57ed-445c-435d-88d5-add6190649cf.jpg",
            "images/watch 3/Hublot Classic Fusion Automatic MenGÇÖs Luxury Watch AA Grade/fb85911c-ad59-4932-8b12-fe7fec32a4dc.jpg"
        ],
    },
    {
        id: 33,
        title: "Maserati Limited Edition Automatic Skeleton Men's Watch (AA Grade)",

        price: 2475,          // Offer Price
        regularPrice: 2750,   // Regular Price

        short: "44mm automatic skeleton design with premium croc leather strap.",

        description: `
<p>The Maserati Limited Edition Automatic Skeleton Watch delivers bold luxury styling with a fully visible mechanical movement. Featuring a 44mm case and skeleton dial, this timepiece showcases the beauty of automatic engineering.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Maserati (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog (Full Skeleton Dial)</li>
  <li><strong>Movement:</strong> Automatic (Self-Winding – No Battery Required)</li>
  <li><strong>Case Diameter:</strong> 44mm</li>
  <li><strong>Case Thickness:</strong> 12mm</li>
  <li><strong>Band Width:</strong> 22mm</li>
  <li><strong>Weight:</strong> Approx. 85g – 100g</li>
  <li><strong>Water Resistance:</strong> Splash Resistant (Daily use)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Build & Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Visible skeleton mechanical movement</li>
  <li>Premium croc-pattern leather strap</li>
  <li>Classic tang buckle fastening</li>
  <li>Bold 44mm luxury wrist presence</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Gold & Black</li>
  <li>Full Black</li>
</ul>
`,
        variants: [
            { color: "Gold & Black", img: "images/watch 3/Maserati Limited Edition Automatic Skeleton Men's Watch/0393ee5e-ee8e-4f43-b0d3-b61d5a904b75.jpg" },
            { color: "Full Black", img: "images/watch 3/Maserati Limited Edition Automatic Skeleton Men's Watch/e453be39-e166-482c-9331-7798c5a6cf5d.jpg" },
        ],

        gallery: [
            "images/watch 3/Maserati Limited Edition Automatic Skeleton Men's Watch/0393ee5e-ee8e-4f43-b0d3-b61d5a904b75.jpg",
            "images/watch 3/Maserati Limited Edition Automatic Skeleton Men's Watch/e453be39-e166-482c-9331-7798c5a6cf5d.jpg"
        ],
    },
    {
        id: 34,
        title: "Rolex Cosmograph Daytona Rainbow Bezel Luxury Men's Watch (AA Grade)",

        price: 2295,          // Offer Price
        regularPrice: 2550,   // Regular Price

        short: "40mm rainbow bezel luxury chronograph with premium oyster bracelet.",

        description: `
<p>The Rolex Cosmograph Daytona Rainbow Bezel Edition delivers a bold luxury statement with its vibrant multi-color crystal bezel and iconic chronograph styling. Designed for premium wrist presence, this model blends elegance with sporty sophistication.</p>

<h4 class="font-semibold mt-4">🔹 Product Specifications</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li><strong>Brand:</strong> Rolex (AA Grade)</li>
  <li><strong>Gender:</strong> Men</li>
  <li><strong>Watch Shape:</strong> Round</li>
  <li><strong>Display Type:</strong> Analog (Chronograph Working Look)</li>
  <li><strong>Movement:</strong> Quartz (Battery Operated)</li>
  <li><strong>Case Diameter:</strong> 40mm</li>
  <li><strong>Case Thickness:</strong> 12.5mm</li>
  <li><strong>Band Width:</strong> 20mm</li>
  <li><strong>Weight:</strong> Approx. 140g – 155g (Premium heavy feel)</li>
  <li><strong>Water Resistance:</strong> Splash Resistant (Daily use)</li>
</ul>

<h4 class="font-semibold mt-4">✨ Design Highlights</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Multi-color Rainbow crystal bezel</li>
  <li>Premium Oyster stainless steel bracelet</li>
  <li>Luxury polished finish</li>
  <li>Bold chronograph styling</li>
</ul>

<h4 class="font-semibold mt-4">🎨 Color Variants</h4>
<ul class="list-disc ml-5 mt-2 space-y-1">
  <li>Silver Rainbow</li>
  <li>Gold Rainbow</li>
</ul>
`,
        variants: [
            { color: "Silver Rainbow", img: "images/watch 3/Rolex Cosmograph Daytona Rainbow Bezel Luxury Men's Watch/eed38866-bd32-49a6-9306-98e85407c08d.jpg" },
            { color: "Gold Rainbow", img: "images/watch 3/Rolex Cosmograph Daytona Rainbow Bezel Luxury Men's Watch/d57c3e1e-fd80-41a4-a031-99ff7ca506ad.jpg" },
        ],

        gallery: [
            "images/watch 3/Rolex Cosmograph Daytona Rainbow Bezel Luxury Men's Watch/eed38866-bd32-49a6-9306-98e85407c08d.jpg",
            "images/watch 3/Rolex Cosmograph Daytona Rainbow Bezel Luxury Men's Watch/d57c3e1e-fd80-41a4-a031-99ff7ca506ad.jpg"
        ],
    },
];

/***********************
 * HELPERS
 ***********************/
const money = (n) => `৳${Number(n || 0).toLocaleString("en-US")}`;

function qs(id) { return document.getElementById(id); }
function getCart() {
    try { return JSON.parse(localStorage.getItem("cart") || "[]"); }
    catch { return []; }
}

function getDeliveryCharge() {
    const el = qs("deliveryArea");
    return el ? Number(el.value || 0) : 0;
}

function getDeliveryAreaLabel() {
    const el = qs("deliveryArea");
    return el?.selectedOptions?.[0]?.textContent || "";
}

function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}
function cartCount(cart) {
    return cart.reduce((sum, it) => sum + (it.qty || 0), 0);
}
function cartTotal(cart) {
    return cart.reduce((sum, it) => sum + (it.price * it.qty), 0);
}
function findProduct(id) {
    return PRODUCTS.find(p => p.id === Number(id));
}

function getDeliveryCharge() {
    const el = qs("deliveryArea");
    return el ? Number(el.value || 0) : 0;
}

function getDeliveryAreaLabel() {
    const el = qs("deliveryArea");
    return el?.selectedOptions?.[0]?.textContent || "";
}

function upsertCartItem({ productId, variantColor }) {
    const p = findProduct(productId);
    if (!p) return;

    const cart = getCart();
    const key = `${p.id}:${variantColor}`;

    const existing = cart.find(x => x.key === key);
    if (existing) {
        existing.qty += 1;
    } else {
        const variant = p.variants.find(v => v.color === variantColor) || p.variants[0];
        cart.push({
            key,
            productId: p.id,
            title: p.title,
            color: variant.color,
            img: variant.img,
            price: p.price,
            qty: 1,
        });
    }
    setCart(cart);
}

function updateCartBadge() {
    const badge = qs("cartCountBadge");
    if (!badge) return;
    badge.textContent = String(cartCount(getCart()));
}

/***********************
 * HERO SLIDER (3 images)
 ***********************/
const HERO_IMAGES = [
    "images/banner1.jpeg",
    "images/banner2.jpeg",
    "images/banner3.jpeg",
];
let heroIndex = 0;
function setHero(i) {
    const hero = qs("heroImg");   // main image
    const bg = qs("heroBg");      // blurred background
    if (!hero) return;

    heroIndex = i;

    // main image change
    hero.src = HERO_IMAGES[heroIndex];

    // background image change
    if (bg) {
        bg.src = HERO_IMAGES[heroIndex];
    }

    // active dot style
    document.querySelectorAll("[data-hero]").forEach((dot, index) => {
        dot.classList.remove("bg-white");
        dot.classList.add("bg-white/40");

        if (index === heroIndex) {
            dot.classList.remove("bg-white/40");
            dot.classList.add("bg-white");
        }
    });
}
function startHeroAuto() {
    const hero = qs("heroImg");
    if (!hero) return;
    setHero(0);
    setInterval(() => {
        heroIndex = (heroIndex + 1) % HERO_IMAGES.length;
        setHero(heroIndex);
    }, 3000);
}

/***********************
 * INDEX PAGE: render products (16 first, View more -> 30)
 ***********************/
let showingAll = false;

function productCardHTML(p) {
    const cover = p.variants[0].img;

    return `
    <div class="card bg-base-100 shadow hover:shadow-lg transition cursor-pointer relative"
         data-open-product="${p.id}">

      ${p.regularPrice ? `
        <div class="badge badge-error absolute top-3 right-3">
          SALE
        </div>
      ` : ""}

      <figure class="px-4 pt-4">
        <img src="${cover}" alt="${p.title}" class="rounded-2xl h-44 w-full object-cover"/>
      </figure>

      <div class="card-body">
        <h3 class="card-title text-base">${p.title}</h3>
        <p class="text-sm text-base-content/70">${p.short}</p>

        <div class="flex items-center justify-between mt-2">

          <div class="flex flex-col">
            <span class="font-bold text-red-600">
              ${money(p.price)}
            </span>

            ${p.regularPrice ? `
              <span class="text-sm line-through text-gray-400">
                ${money(p.regularPrice)}
              </span>
            ` : ""}
          </div>

          <button class="btn btn-sm btn-outline" data-quick-add="${p.id}">
            Add
          </button>

        </div>
      </div>
    </div>
  `;
}

function renderIndexGrid() {
    const grid = qs("productGrid");
    if (!grid) return;

    const searchInput = qs("searchInput");
    const q = (searchInput?.value || "").trim().toLowerCase();

    let list = PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q)
    );

    const limit = showingAll ? list.length : 16;
    const sliced = list.slice(0, limit);

    grid.innerHTML = sliced.map(productCardHTML).join("");

    // view more button visibility
    const viewMoreBtn = qs("viewMoreBtn");
    if (viewMoreBtn) {
        const shouldShow = !showingAll && list.length > 16;
        viewMoreBtn.classList.toggle("hidden", !shouldShow);
    }
}

/***********************
 * DETAILS PAGE
 ***********************/
function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function renderDetailsPage() {
    const mainImg = qs("mainImg");
    const titleEl = qs("title");
    const descEl = qs("desc");
    const priceEl = qs("price");
    const thumbs = qs("thumbs");
    const colorOptions = qs("colorOptions");
    if (!mainImg || !titleEl || !descEl || !priceEl || !thumbs || !colorOptions) return;

    const id = getQueryParam("id");
    const p = findProduct(id);
    if (!p) {
        titleEl.textContent = "Product not found";
        return;
    }

    // default selected color is first variant
    let selectedColor = p.variants[0].color;
    mainImg.src = p.variants[0].img;

    titleEl.textContent = p.title;
    descEl.innerHTML = p.description;
    priceEl.textContent = money(p.price);

    // thumbs (gallery)
    thumbs.innerHTML = p.gallery.map((src, idx) => `
    <button class="btn btn-sm btn-outline" data-thumb="${idx}">
      <img src="${src}" class="w-10 h-10 object-cover rounded-xl" alt="thumb"/>
    </button>
  `).join("");

    // color options
    colorOptions.innerHTML = p.variants.map(v => `
    <button class="btn btn-sm ${v.color === selectedColor ? "btn-primary" : "btn-outline"}"
            data-color="${v.color}">
      ${v.color}
    </button>
  `).join("");

    // events
    thumbs.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-thumb]");
        if (!btn) return;
        const idx = Number(btn.getAttribute("data-thumb"));
        mainImg.src = p.gallery[idx];
    });

    colorOptions.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-color]");
        if (!btn) return;
        selectedColor = btn.getAttribute("data-color");
        const v = p.variants.find(x => x.color === selectedColor) || p.variants[0];
        mainImg.src = v.img;

        // re-render active style
        colorOptions.querySelectorAll("[data-color]").forEach(b => {
            b.classList.remove("btn-primary");
            b.classList.add("btn-outline");
            if (b.getAttribute("data-color") === selectedColor) {
                b.classList.add("btn-primary");
                b.classList.remove("btn-outline");
            }
        });
    });

    const addBtn = qs("addToCartBtn");
    const buyBtn = qs("buyNowBtn");

    addBtn?.addEventListener("click", () => {
        upsertCartItem({ productId: p.id, variantColor: selectedColor });
        openCartModal();
    });

    buyBtn?.addEventListener("click", () => {
        upsertCartItem({ productId: p.id, variantColor: selectedColor });
        window.location.href = "./checkout.html";
    });



    // image modal open on click
    const mainImage = qs("mainImg");
    const imageModal = qs("imageModal");
    const modalPreviewImg = qs("modalPreviewImg");

    mainImage?.addEventListener("click", () => {
        if (!imageModal) return;
        modalPreviewImg.src = mainImage.src;
        imageModal.showModal();
    });
}

/***********************
 * CART MODAL UI
 ***********************/
function cartItemRowHTML(item) {
    return `
  <div class="flex gap-3 items-center bg-base-200 p-3 rounded-2xl">
    <img src="${item.img}" class="w-14 h-14 object-cover rounded-xl" alt="img"/>
    <div class="flex-1">
      <div class="font-semibold">${item.title}</div>
      <div class="text-sm text-base-content/70">Color: ${item.color}</div>
      <div class="text-sm font-bold">${money(item.price)}</div>
    </div>

    <div class="flex items-center gap-2">
      <button class="btn btn-xs" data-dec="${item.key}">-</button>
      <span class="w-6 text-center">${item.qty}</span>
      <button class="btn btn-xs" data-inc="${item.key}">+</button>
    </div>

    <button class="btn btn-xs btn-error" data-remove="${item.key}">Remove</button>
  </div>
  `;
}

function renderCartModal() {
    const wrap = qs("cartItemsWrap");
    const totalEl = qs("cartTotal");
    if (!wrap || !totalEl) return;

    const cart = getCart();
    if (cart.length === 0) {
        wrap.innerHTML = `<div class="alert"><span>Your cart is empty.</span></div>`;
    } else {
        wrap.innerHTML = cart.map(cartItemRowHTML).join("");
    }
    totalEl.textContent = money(cartTotal(cart));

    // actions
    wrap.onclick = (e) => {
        const cart = getCart();
        const inc = e.target.closest("[data-inc]");
        const dec = e.target.closest("[data-dec]");
        const rm = e.target.closest("[data-remove]");

        if (inc) {
            const key = inc.getAttribute("data-inc");
            const it = cart.find(x => x.key === key);
            if (it) it.qty += 1;
            setCart(cart);
            renderCartModal();
            renderCheckoutModal();
        }
        if (dec) {
            const key = dec.getAttribute("data-dec");
            const it = cart.find(x => x.key === key);
            if (it) it.qty = Math.max(1, it.qty - 1);
            setCart(cart);
            renderCartModal();
            renderCheckoutModal();
        }
        if (rm) {
            const key = rm.getAttribute("data-remove");
            const next = cart.filter(x => x.key !== key);
            setCart(next);
            renderCartModal();
            renderCheckoutModal();
        }
    };
}

/***********************
 * CHECKOUT MODAL UI
 ***********************/
function checkoutRowHTML(item) {
    const line = item.price * item.qty;
    return `
  <div class="flex gap-3 items-center bg-base-200 p-3 rounded-2xl">
    <img src="${item.img}" class="w-12 h-12 object-cover rounded-xl" alt="img"/>
    <div class="flex-1">
      <div class="font-semibold text-sm">${item.title}</div>
      <div class="text-xs text-base-content/70">Color: ${item.color}</div>
      <div class="text-xs font-bold">${money(item.price)} × ${item.qty} = ${money(line)}</div>
    </div>

    <div class="flex items-center gap-2">
      <button class="btn btn-xs" data-cdec="${item.key}">-</button>
      <span class="w-6 text-center text-sm">${item.qty}</span>
      <button class="btn btn-xs" data-cinc="${item.key}">+</button>
    </div>

    <button class="btn btn-xs btn-error" data-cremove="${item.key}">✕</button>
  </div>
  `;
}

function renderCheckoutPage() {
    const wrap = qs("checkoutItemsWrap");
    const subtotalEl = qs("subtotalPrice");
    const shippingEl = qs("shippingPrice");
    const totalEl = qs("checkoutTotal");

    if (!wrap || !subtotalEl || !shippingEl || !totalEl) return;

    const cart = getCart();

    if (cart.length === 0) {
        wrap.innerHTML = `<div class="alert"><span>Your cart is empty.</span></div>`;
    } else {
        wrap.innerHTML = cart.map(it => `
            <div class="flex items-center gap-3 bg-base-200 p-3 rounded-2xl">
                <img src="${it.img}" class="w-14 h-14 object-cover rounded-xl" alt="img"/>
                <div class="flex-1">
                    <div class="font-semibold text-sm">${it.title}</div>
                    <div class="text-xs text-base-content/70">Color: ${it.color}</div>
                    <div class="text-xs text-base-content/70">Qty: ${it.qty}</div>
                </div>
                <div class="font-semibold">${money(it.price * it.qty)}</div>
            </div>
        `).join("");
    }

    const subtotal = cartTotal(cart);
    const shippingInput = document.querySelector("input[name='shipping']:checked");
    const shipping = shippingInput ? Number(shippingInput.value) : 80;
    const total = subtotal + shipping;

    subtotalEl.textContent = money(subtotal);
    shippingEl.textContent = money(shipping);
    totalEl.textContent = money(total);
}

/***********************
 * MODALS OPEN/CLOSE
 ***********************/
function openCartModal() {
    const m = qs("cartModal");
    if (!m) return;
    renderCartModal();
    m.showModal();
}
function openCheckoutModal() {
    const m = qs("checkoutModal");
    if (!m) return;
    renderCheckoutModal();
    m.showModal();
}

/***********************
 * ORDER SUBMIT (Google Sheet)
 ***********************/
async function submitOrder() {
    const status = qs("orderStatus");
    const name = (qs("custName")?.value || "").trim();
    const phone = (qs("custPhone")?.value || "").trim();
    const address = (qs("custAddress")?.value || "").trim();

    const cart = getCart();

    if (cart.length === 0) {
        if (status) status.textContent = "Cart empty. Add products first.";
        return;
    }

    if (!name || !phone || !address) {
        if (status) status.textContent = "Name, phone, address are required.";
        return;
    }

    // ✅ shipping from radio buttons
    const selectedShipping = document.querySelector("input[name='shipping']:checked");
    const deliveryCharge = selectedShipping ? Number(selectedShipping.value) : 80;
    const deliveryArea = selectedShipping
        ? selectedShipping.closest("label")?.innerText?.trim().split("\n")[0] || "Inside Dhaka"
        : "Inside Dhaka";

    // ✅ totals
    const subtotal = cartTotal(cart);
    const grandTotal = subtotal + deliveryCharge;

    // ✅ payload
    const payload = {
        createdAt: new Date().toISOString(),

        customer: {
            name,
            phone,
            address
        },

        items: cart.map(it => ({
            title: it.title,
            color: it.color,
            qty: it.qty,
            price: it.price,
            lineTotal: it.qty * it.price,
            img: it.img
        })),

        subtotal,
        deliveryCharge,
        deliveryArea,
        total: grandTotal
    };

    if (!SHEET_WEB_APP_URL || SHEET_WEB_APP_URL.includes("PASTE_YOUR")) {
        if (status) {
            status.textContent =
                "Apps Script Web App URL সেট করা নাই। app.js এ SHEET_WEB_APP_URL বসান।";
        }
        return;
    }

    try {
        if (status) status.textContent = "Submitting order...";

        const res = await fetch(SHEET_WEB_APP_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.ok === false) {
            throw new Error(data.error || "Failed");
        }

        if (status) status.textContent = "✅ Order confirmed! We received your order.";

        setCart([]);
        renderCartModal();
        renderCheckoutModal();

        // optional: clear form
        if (qs("custName")) qs("custName").value = "";
        if (qs("custPhone")) qs("custPhone").value = "";
        if (qs("custAddress")) qs("custAddress").value = "";

    } catch (err) {
        if (status) {
            status.textContent = "❌ Order submit failed. Check Apps Script deploy permission.";
        }
        console.error(err);
    }
}

/***********************
 * GLOBAL EVENTS
 ***********************/
function attachGlobalEvents() {


    qs("openCartBtn")?.addEventListener("click", openCartModal);

    qs("openCheckoutBtn")?.addEventListener("click", () => {
        window.location.href = "./checkout.html";
    });

    document.addEventListener("change", (e) => {
        if (e.target.name === "shipping") {
            renderCheckoutPage();
        }
    });

    // document.addEventListener("change", (e) => {
    //     if (e.target.name === "shipping") {
    //         renderCheckoutModal();
    //     }
    // });

    qs("deliveryArea")?.addEventListener("change", () => {
        renderCheckoutModal();
    });



    // year
    const y = qs("year");
    if (y) y.textContent = String(new Date().getFullYear());

    updateCartBadge();

    // open cart buttons
    qs("openCartBtn")?.addEventListener("click", openCartModal);

    // open checkout buttons
    qs("openCheckoutBtn")?.addEventListener("click", openCheckoutModal);
    qs("openCheckoutBtnTop")?.addEventListener("click", openCheckoutModal);

    // clear cart
    qs("clearCartBtn")?.addEventListener("click", () => {
        setCart([]);
        renderCartModal();
        renderCheckoutModal();
    });

    // confirm order
    qs("confirmOrderBtn")?.addEventListener("click", submitOrder);

    // hero buttons
    document.querySelectorAll("[data-hero]").forEach(btn => {
        btn.addEventListener("click", () => setHero(Number(btn.getAttribute("data-hero"))));
    });

    // index view more
    qs("viewMoreBtn")?.addEventListener("click", () => {
        showingAll = true;
        renderIndexGrid();
    });

    // search
    qs("searchInput")?.addEventListener("input", () => {

        showingAll = false;
        renderIndexGrid();
    });
    qs("clearSearchBtn")?.addEventListener("click", () => {
        const si = qs("searchInput");
        if (si) si.value = "";
        showingAll = false;
        renderIndexGrid();
    });


    const grid = qs("productGrid");
    if (grid) {
        grid.addEventListener("click", (e) => {
            const addBtn = e.target.closest("[data-quick-add]");
            if (addBtn) {
                const id = addBtn.getAttribute("data-quick-add");

                const p = findProduct(id);
                const color = p?.variants?.[0]?.color || "Black";
                upsertCartItem({ productId: Number(id), variantColor: color });
                openCartModal();
                return;
            }

            const card = e.target.closest("[data-open-product]");
            if (card) {
                const id = card.getAttribute("data-open-product");
                window.location.href = `./product.html?id=${id}`;
            }
        });
    }
}

/***********************
 * INIT
 ***********************/
(function init() {
    attachGlobalEvents();
    startHeroAuto();
    renderIndexGrid();
    renderDetailsPage();
    renderCheckoutPage();
})();