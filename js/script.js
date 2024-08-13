    // Sidenav
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });

    // Autocomplete
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
            "Jerusalem": null,
            "Tel Aviv": null,
            "Aruba": null,
            "Haifa": null,
            "Nazareth": null,
            "Masada": null,
            "Dead Sea": null,
            "Eilat": null,
            "Casesarea": null,
            "Acre": null,
            "Galilee": null,
        }
    })

    // Material Boxed
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});

    // ScrollSpy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {})