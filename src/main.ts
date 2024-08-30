import gsap from "gsap";

const desktopDropDownBtns =
    gsap.utils.toArray<HTMLButtonElement>(".dropdown-btn");
const desktopMenus = gsap.utils.toArray<HTMLDivElement>(".dropdown-menu");
desktopDropDownBtns.map((item, index) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        const menu = desktopMenus[index];
        if (menu.style.display === "flex") {
            closeAllDesktopMenu();
        } else {
            menu.style.display = "flex";
            closeAllDesktopMenu(index);
            const arrow = item.querySelector("img");
            gsap.to(arrow, { rotate: 180, duration: 0.5, ease: "power2.out" });
            gsap.fromTo(
                menu,
                { opacity: 0, y: -25 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    });
});
desktopMenus.map((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
document.addEventListener("click", () => {
    closeAllDesktopMenu();
});

function closeAllDesktopMenu(exceptFor?: number) {
    desktopMenus.map((menu, index) => {
        if (exceptFor === index) {
            return;
        }
        gsap.to(menu, {
            opacity: 0,
            y: -25,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
                menu.style.display = "none";
            },
        });
    });
    desktopDropDownBtns.map((btn, index) => {
        if (exceptFor === index) {
            return;
        }
        const arrow = btn.querySelector("img")
        gsap.to(arrow, { rotate: 0, duration: 0.5, ease: "power2.out" });
    })
}
