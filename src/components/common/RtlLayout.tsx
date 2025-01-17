import { useEffect } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

export default function RtlLayout({ children }: {
    children: JSX.Element
}) {
    const theme = useTheme();
    useEffect(() => {
        document.dir = theme.direction;
    }, [theme.direction]);

    const cacheRtl = createCache({
        key: theme.direction === 'rtl' ? 'rtl' : 'css',
        stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : [],
    });
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
