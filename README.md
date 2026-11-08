# ISARA Premium Website — GitHub Pages

## Files
- `index.html` — homepage
- `ethnic-wear.html` — Ethnic Wear category
- `party-wear.html` — Party Wear category
- `product.html` — reusable product detail page
- `css/style.css` — site styling and responsive layout
- `js/products.js` — product list and WhatsApp enquiry settings

## Before publishing

### 1. Set your WhatsApp number
Open `js/products.js` and replace:
```js
const ISARA_WHATSAPP_NUMBER = "919746699702";
```
with your business WhatsApp number, digits only, including country code. Example format: `919876543210`.

Also replace `919746699702` in the WhatsApp links in `index.html` and `css`? In `index.html`, update the WhatsApp URL in the footer/contact link if you change it. The product detail enquiry button uses the number from `products.js`.

### 2. Check image paths
The code expects these existing repository files:
- `assets/assets/IMG-20261108-WA0015~2.jpg.jpeg`
- `assets/assets/IMG_20261105_194316.jpg.jpeg`
- `assets/assets/IMG_20261105_194324.jpg.jpeg`
- `assets/assets/IMG_20261105_194327.jpg.jpeg`
- `assets/assets/IMG_20261105_194328.jpg.jpeg`

Your GitHub repository screenshot showed the uploaded photos inside `assets/assets/`. If your actual folders differ, update the paths in `js/products.js` and `index.html`.

### 3. Add or edit products
Open `js/products.js`. Add a new object inside `ISARA_PRODUCTS`:
```js
{
  id: "ethnic-003",
  name: "Your Design Name",
  category: "ethnic", // use "ethnic" or "party"
  price: "Price on enquiry",
  description: "Write your product description here.",
  image: "assets/assets/your-photo.jpg",
  gallery: [
    "assets/assets/your-photo.jpg",
    "assets/assets/your-second-photo.jpg"
  ]
}
```
- Use a unique `id`.
- Add image files to your repository first.
- Product detail pages open automatically using `product.html?id=ethnic-003`.
- Category pages automatically show products by category.

### 4. GitHub upload steps
1. Open your repository: `ofcdrz/danish-raza-personal`.
2. Click **Add file → Upload files**.
3. Upload the new `index.html`, `ethnic-wear.html`, `party-wear.html`, and `product.html` to the repository root.
4. Upload the `css` folder and `js` folder, keeping their folder structure.
5. Do not delete your existing `assets/assets/` photo folder.
6. Commit changes to the `main` branch.
7. Wait for GitHub Pages deployment to finish under **Actions**.
8. Open your website and test both category links and product detail pages.

## Notes
- This is a static premium showcase website for GitHub Pages.
- Product prices are shown as “Price on enquiry”; no unconfirmed prices have been invented.
- WhatsApp enquiry works after you add your own business number.
- There is no online checkout, payment gateway, inventory database, customer login, or admin dashboard in this static version.
- The design is inspired by the broad luxury-fashion presentation patterns visible on the reference site, but uses original ISARA wording and layout rather than copying its branding or exact page.
