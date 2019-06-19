https://rtsdr.com/Lenus/index

Due to htaccess files on my domain the entry point is index or index.html

# Emulating a CMS

CMS is emulated via data.json file that was hand-written.
Therefore I can use any endpoint with data in case of a real CMS.
All the images and vast majority of text is fetched from that JSON file.

# Vanilla JS, Sass

The site is coded in vanilla JS due to performance advantages, styled with Sass, converted to main.css.

# Image Switch

At the current state I am checking the window size once at script load and switching images if width is above 600px. This could be further improved with more image changes, but as it stands now, the performance doesn't seem to be an issue. Assets were prepared by me, but in case of WP, they are automatically created in different sizes, I would also use a WP plugin to optimize images automatically (resmush.it or similar).

# Testing the Performance

I am used to running quick tests on Chrome, using Inspector>Audits (Google "Lighthouse"). Reason behind this is that Chrome is the most popular browser and Google is in a position to set the standard for SEO.

# Possible backwards compatibility issues

JS Fetch API is not supported Internet Explorer, which of course isn't a problem in case of smartphones, but a thing to note.

# Responsiveness

Form the most part it can be viewed by resizing the browser window on desktop, but there are some styling features done in JS that only check screen width on load so a refresh may be necessary.
