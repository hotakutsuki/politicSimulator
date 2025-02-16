import Image from 'next/image';
import clsx from 'clsx';

type LogoProps = {
    className?: string;
};

export default function Logo({ className }: LogoProps) {
    return (
        <Image
            src="/logo.png"
            width={512}
            height={512}
            className={clsx(className,
                'hidden md:block'
            )}
            alt="Screenshots of the dashboard project showing desktop version"
        />
    );
}
