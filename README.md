# AI Calendar Assistant Landing Page

A modern landing page for the AI Calendar Assistant that helps users schedule events through WhatsApp using natural language.

## Features

- Clean, modern design with smooth animations
- Responsive layout that works on all devices
- PayPal integration for easy payments
- Clear pricing structure based on coffee analogies
- Video demo section
- Feature highlights with images

## Setup Instructions

1. Clone this repository
2. Replace the PayPal client ID in `index.html`:
   ```html
   <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD"></script>
   ```
3. Add your media files to the `assets` directory:
   - `hero-image.jpg` - Main hero section image
   - `feature-image.jpg` - Feature section image
   - `demo.mp4` - Product demo video

4. Test the page locally using a web server (e.g., using Python's built-in server):
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

5. Deploy to your preferred hosting service.

## Customization

- Colors can be modified in the `:root` section of `styles.css`
- Pricing can be updated in both `index.html` and `script.js`
- Content and copy can be modified directly in `index.html`

## PayPal Integration

The landing page includes PayPal integration for two plans:
- Trial Plan ($5) - One coffee worth of access
- Premium Plan ($25) - A week's coffee supply worth of access (2 months)

To complete the integration:
1. Sign up for a PayPal Business account
2. Get your client ID from the PayPal Developer Dashboard
3. Replace `YOUR_CLIENT_ID` in the PayPal script tag
4. Implement the server-side webhook handling for successful payments

## Support

For any questions or issues, please open an issue in this repository. 