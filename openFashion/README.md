# Project Overview
This e-commerce mobile application, developed using React Native, provides a user-friendly platform for product browsing and management. It integrates features such as viewing products, adding them to a cart, and checking out, all handled locally on the user’s device using AsyncStorage.

# Features
- HomeScreen: Displays products fetched from an external API, each with an "Add to Cart" option.
- ProductDetailScreen: Offers detailed views of each product.
- CartScreen: Allows users to view and manage their shopping cart.
- Drawer Navigation: Facilitates easy navigation via a drawer accessible through gestures and buttons.

# Data Storage
- Local Storage with AsyncStorage: Manages cart items locally to maintain state persistence across sessions.
Design and User Experience
- Simplified Navigation: Utilizes React Navigation for smooth transitions across a stack navigator for main screens and a drawer navigator for additional menus.
- Intuitive UI: Adopts a grid layout for products to enhance visibility and ease of use. Product cards prominently display images, titles, and prices.

# Technical Implementation
- State Management: Employs React’s useState and useEffect for efficient state handling and rendering.
- Persistent Data Storage: Uses AsyncStorage for storing cart items, with mechanisms to update and retrieve data seamlessly.
# Setup
- Clone the repository.
- Install dependencies with npm install or yarn install.
- Launch the app using npx react-native run-android or npx react-native run-ios.

# Conclusion
This application exemplifies a basic e-commerce functionality using React Native, showcasing efficient data handling, user-friendly design, and robust navigation and storage solutions.

