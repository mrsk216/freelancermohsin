import { useTheme } from '@/hooks/use-theme';
export default function AppLogo() {
    const { theme } = useTheme();
    return (
        <>
            <img
                src={
                    theme === 'dark'
                        ? '/assets/images/mohsin-logo-dark.png'
                        : '/assets/images/mohsin-logo.png'
                }
                alt="Mohsin"
                className="w-full"
            />
      
        </>
    );
}
