// PayPal Integration
paypal.Buttons({
    createOrder: function(data, actions) {
        // Trial Plan - $5
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '5.00'
                },
                description: 'AI Calendar Assistant - Trial Plan'
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Here you would typically:
            // 1. Send the order details to your server
            // 2. Activate the trial subscription
            // 3. Redirect to onboarding
        });
    }
}).render('#paypal-button-trial');

paypal.Buttons({
    createOrder: function(data, actions) {
        // Premium Plan - $25
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '25.00'
                },
                description: 'AI Calendar Assistant - Premium Plan (2 Months)'
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Here you would typically:
            // 1. Send the order details to your server
            // 2. Activate the premium subscription
            // 3. Redirect to onboarding
        });
    }
}).render('#paypal-button-premium');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .pricing-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animation properties
document.querySelectorAll('.feature-card, .pricing-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 