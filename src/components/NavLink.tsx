import { NavLink as RouterNavLink, NavLinkProps, useLocation } from "react-router-dom";
import { forwardRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  scrollToTop?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, scrollToTop = true, ...props }, ref) => {
    const location = useLocation();
    
    // Scroll to top when the location changes
    useEffect(() => {
      if (scrollToTop) {
        window.scrollTo(0, 0);
      }
    }, [location.pathname, scrollToTop]);

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
        onClick={() => {
          if (scrollToTop) {
            window.scrollTo(0, 0);
          }
        }}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
