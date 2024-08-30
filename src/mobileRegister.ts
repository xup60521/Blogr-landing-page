import gsap from "gsap";
import MenuIcon from "/images/icon-hamburger.svg";
import CloseIcon from "/images/icon-close.svg";

export default function mobileRegister() {
    let isOpen = false;
    const menuBtn = document.querySelector("#menu-btn") as HTMLImageElement;
    const mobileMenu = document.querySelector("#mobile-menu") as HTMLDivElement;
    const mobileDropdownMenuBtns = gsap.utils.toArray<HTMLButtonElement>(
        ".mobile-dropdown-btn"
    );
    const mobileDropdownMenus = gsap.utils.toArray<HTMLDivElement>(
        ".mobile-dropdown-menu"
    );
    mobileMenu.addEventListener("click", (e) => e.stopPropagation());
    menuBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isOpen) {
            isOpen = false;
            menuBtn.src = MenuIcon;
            gsap.to(mobileMenu, {
                opacity: 0,
                y: -25,
                duration: 0.25,
                ease: "power2.in",
                onComplete: () => {
                    mobileMenu.style.display = "none";
                },
            });
        } else {
            isOpen = true;
            menuBtn.src = CloseIcon;
            mobileMenu.style.display = "flex";
            gsap.fromTo(
                mobileMenu,
                { opacity: 0, y: -25 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    });
    mobileDropdownMenuBtns.map((btn, btnIndex) => {
        btn.addEventListener("click", () => {
            const menu = mobileDropdownMenus[btnIndex];
            if (menu.style.height === "auto") {
                closeAllDropdownMenu();
            } else {
                closeAllDropdownMenu(btnIndex);
                const arrow = btn.querySelector("img");
                gsap.to(arrow, {
                    rotate: 180,
                    duration: 0.5,
                    ease: "power2.out",
                });
                gsap.fromTo(
                    menu,
                    { height: 0 },
                    {
                        height: "auto",
                        duration: 0.5,
                        marginTop: "1rem",
                        ease: "power2.out",
                    }
                );
            }
        });
    });
    function closeAllDropdownMenu(exceptFor?: number) {
        mobileDropdownMenus.map((menu, index) => {
            if (index === exceptFor) {
                return;
            }
            gsap.to(menu, {
                height: 0,
                duration: 0.5,
                marginTop: 0,
                ease: "power2.out",
            });
            const btn = mobileDropdownMenuBtns[index];
            const arrow = btn.querySelector("img");
            gsap.to(arrow, { rotate: 0, duration: 0.5, ease: "power2.out" });
        });
    }
}
