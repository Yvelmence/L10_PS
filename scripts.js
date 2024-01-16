// fullpage
$(document).ready(function () {
    $('#fullpage').fullpage({
        // Initialize
        // Set options
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function (origin, destination, direction) {
            // Reset all previous animations
            anime({
                targets: '.animated',
                translateY: 0,
                opacity: 0,
                duration: 1,
            });

            // Define animations based on the destination section
            if (destination.anchor === 'cases') {
                animateCases();
            } else if (destination.anchor === 'progress') {
                animateProgress();
            } else if (destination.anchor === 'centres') {
                animateCentres();
            } else {
                animateFooter();
            }
        },
    });

    // Chart animation function
    function animateCases() {
        anime.timeline({
            easing: 'easeOutQuad',
            duration: 500,
        }).add({
            targets: '.col-md-4, .col-md-6 p, #myChart',
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
        });
    }

    // Progress section animation function
    function animateProgress() {
        anime.timeline({
            easing: 'easeOutQuad',
            duration: 500,
        }).add({
            targets: '.col-md-6 i, .col-md-6 p',
            translateY: [-20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
        });
    }

    // Centres section animation function
    function animateCentres() {
        anime.timeline({
            easing: 'easeOutQuad',
            duration: 500,
        }).add({
            targets: '.map-container .pin, .table-responsive',
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
        });
    }

    // Footer animation function
    function animateFooter() {
        anime.timeline({
            easing: 'easeOutQuad',
            duration: 500,
        }).add({
            targets: 'footer',
            translateY: [20, 0],
            opacity: [0, 1],
        });
    }
});


// chart
var labels = ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7', 'Dec 8', 'Dec 9', 'Dec 10', 'Dec 11', 'Dec 12', 'Dec 13', 'Dec 14'];
var cases = [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Daily Cases',
            data: cases,
            backgroundColor: 'rgba(230, 20, 80, 0.5)',
            borderColor: 'rgba(255, 36, 87, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// table

$(document).ready(function () {
    var table = $('.clinics').DataTable({
        "pageLength": 6,
        "lengthChange": false,
        "searching": false,
        "ordering": false
    });

    // Initial setup to hide/show pins based on the first page
    updatePins(0);

    // Listen for DataTable page change event
    table.on('page.dt', function () {
        // Get the current page index (zero-based)
        var currentPage = table.page();

        // Update pins based on the current page
        updatePins(currentPage);
    });

    function updatePins(currentPage) {
        // Calculate the range of pins to show/hide based on the current page
        var startPin = currentPage * 6 + 1; // Assuming 6 items per page
        var endPin = startPin + 5;

        // Hide all pins
        $('[id^="pin"]').hide();

        // Show pins within the calculated range
        for (var i = startPin; i <= endPin; i++) {
            $('#pin' + i).show();
        }
    }

    $('#fullpage').fullpage({
        // initialize
        // set options
        navigation: true,
        navigationPosition: 'right'
    });
});

tippy('#pin1',{
    content: '11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662',
})
tippy('#pin2',{
    content: '50 Bukit Batok West Avenue 3, Singapore 659164',
})
tippy('#pin3',{
    content: '162 Bukit Merah Central Level 4, Singapore 150163',
})
tippy('#pin4',{
    content: '2 Teck Whye Crescent, Singapore 688846',
})
tippy('#pin5',{
    content: '451 Clementi Avenue 3, Singapore 120451',
})
tippy('#pin6',{
    content: '21 Geylang East Central, Singapore 389707',
})
tippy('#pin7',{
    content: '89 Hougang Avenue 4, Singapore 538829',
})
tippy('#pin8',{
    content: '190 Jurong East Avenue 1, Singapore 609788',
})
tippy('#pin9',{
    content: '80 Marine Parade Central, Singapore 440080',
})
tippy('#pin10',{
    content: '3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937',
})
tippy('#pin11',{
    content: '1 Pasir Ris Drive 4, Singapore 519457',
})
tippy('#pin12',{
    content: '26 Jurong West Street 61, Singapore 648201',
})

// Animations

