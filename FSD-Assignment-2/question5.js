const express = require('express');
const app = express();
const PORT = 3000;

// Shared navigation bar for all pages
const navBar = `
  <nav style="background-color: #f8e5d6; padding: 12px; font-family: Arial, sans-serif;">
    <a href="/" style="margin-right: 15px; text-decoration: none; color: #5c3a21; font-weight: bold;">Home</a>
    <a href="/menu" style="margin-right: 15px; text-decoration: none; color: #5c3a21; font-weight: bold;">Menu</a>
    <a href="/contact" style="text-decoration: none; color: #5c3a21; font-weight: bold;">Contact</a>
  </nav>
`;

// 1. Home Page (/)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sweet Crumb Bakery - Home</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0;">
        ${navBar}
        <div style="padding: 20px;">
          <h1 style="color: #5c3a21;">🥐 Sweet Crumb Bakery</h1>
          <p>Welcome to Sweet Crumb Bakery! Freshly baked cakes, pastries, and artisan breads made every morning.</p>
        </div>
      </body>
    </html>
  `);
});

// 2. Menu Page (/menu)
app.get('/menu', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sweet Crumb Bakery - Menu</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0;">
        ${navBar}
        <div style="padding: 20px;">
          <h1 style="color: #5c3a21;">🍰 Our Menu</h1>
          <ul>
            <li><strong>Chocolate Truffle Cake</strong> – ₹450</li>
            <li><strong>Red Velvet Pastry</strong> – ₹120</li>
            <li><strong>Butter Croissant</strong> – ₹90</li>
            <li><strong>Blueberry Muffin</strong> – ₹110</li>
            <li><strong>Cinnamon Roll</strong> – ₹100</li>
          </ul>
        </div>
      </body>
    </html>
  `);
});

// 3. Contact Page (/contact)
app.get('/contact', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sweet Crumb Bakery - Contact</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0;">
        ${navBar}
        <div style="padding: 20px;">
          <h1 style="color: #5c3a21;">📞 Contact Us</h1>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 42 Baker's Lane, Main Market, New Delhi</p>
          <p><strong>Hours:</strong> Mon – Sun, 8:00 AM – 9:00 PM</p>
        </div>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🥐 Bakery website running at http://localhost:${PORT}`);
});