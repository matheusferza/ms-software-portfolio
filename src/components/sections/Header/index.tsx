import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Link, Social } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import CloseIcon from '@/components/svgs/close';
import MenuIcon from '@/components/svgs/menu';
import HeaderLink from './HeaderLink';

export default function Header(props) {
    const { isSticky, styles = {}, ...rest } = props;
    const headerWidth = styles.self?.width ?? 'narrow';
    return (
        <header className={classNames(isSticky ? 'sticky top-0 z-30' : 'relative z-20', 'px-4 pt-4')}>
            <div
                className={classNames({
                    'max-w-7xl mx-auto': headerWidth === 'narrow',
                    'max-w-8xl mx-auto': headerWidth === 'wide',
                    'w-full': headerWidth === 'full'
                })}
            >
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                <HeaderVariants {...rest} />
            </div>
        </header>
    );
}

function HeaderVariants(props) {
    const { headerVariant = 'variant-a', ...rest } = props;
    switch (headerVariant) {
        case 'variant-b':
            return <HeaderVariantB {...rest} />;
        case 'variant-c':
            return <HeaderVariantC {...rest} />;
        default:
            return <HeaderVariantA {...rest} />;
    }
}

function HeaderVariantA(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="site-header-bar">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:ml-2 lg:flex lg:flex-1 lg:flex-wrap lg:items-center lg:gap-2">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul className="hidden lg:ml-auto lg:flex lg:items-center lg:gap-2">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantB(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="site-header-bar">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:ml-auto lg:flex lg:flex-wrap lg:items-center lg:gap-2">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul
                    className={classNames('hidden lg:flex lg:items-center lg:gap-2', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantC(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="site-header-bar">
            <SiteLogoLink {...logoProps} />
            {socialLinks.length > 0 && (
                <ul className="hidden lg:ml-auto lg:flex lg:items-center lg:gap-2">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden lg:flex lg:flex-wrap lg:items-center lg:gap-2', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="ml-auto lg:hidden">
            <button
                aria-label="Open Menu"
                className="mobile-menu-button focus:outline-hidden"
                onClick={() => setIsMenuOpen(true)}
            >
                <MenuIcon className="fill-current w-icon h-icon" />
            </button>
            <div
                className={classNames(
                    'mobile-menu-panel fixed inset-0 z-40 overflow-y-auto px-4 py-4',
                    isMenuOpen ? 'block' : 'hidden'
                )}
            >
                <div className="flex flex-col min-h-full">
                    <div className="site-header-bar justify-between">
                        <SiteLogoLink {...logoProps} />
                        <button
                            aria-label="Close Menu"
                            className="mobile-menu-button focus:outline-hidden"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <CloseIcon className="fill-current w-icon h-icon" />
                        </button>
                    </div>
                    {(primaryLinks.length > 0 || socialLinks.length > 0) && (
                        <div className="flex flex-col items-center justify-center px-4 py-16 space-y-12 grow">
                            {primaryLinks.length > 0 && (
                                <ul className="space-y-6">
                                    <ListOfLinks links={primaryLinks} inMobileMenu={true} />
                                </ul>
                            )}
                            {socialLinks.length > 0 && (
                                <ul className="flex flex-wrap justify-center gap-3">
                                    <ListOfSocialLinks links={socialLinks} inMobileMenu={true} />
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SiteLogoLink({ title, isTitleVisible, logo }) {
    if (!(logo || (title && isTitleVisible))) {
        return null;
    }
    return (
        <div className="flex items-center shrink-0">
            <Link href="/" className="site-logo-link">
                {logo && <ImageBlock {...logo} className="max-h-12" />}
                {title && isTitleVisible && <span className="text-base tracking-widest uppercase">{title}</span>}
            </Link>
        </div>
    );
}

function ListOfLinks({ links, inMobileMenu }) {
    return links.map((link, index) => (
        <li key={index} className={classNames(inMobileMenu ? 'text-center w-full' : 'inline-flex items-stretch')}>
            <HeaderLink
                {...link}
                className={classNames(inMobileMenu ? 'mobile-menu-link' : 'nav-link')}
            />
        </li>
    ));
}

function ListOfSocialLinks({ links, inMobileMenu = false }) {
    return links.map((link, index) => (
        <li key={index} className="inline-flex items-stretch">
            <Social
                {...link}
                className={classNames('social-link-pill text-lg', {
                    'w-14 h-14': inMobileMenu
                })}
            />
        </li>
    ));
}
