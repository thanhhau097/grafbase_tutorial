import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';

type ColumnProps = {
    title: string;
    links: string[];
}

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => (
                <Link href="/" key={link}>
                    {link}
                </Link>
            ))}
        </ul>
    </div>
)


const Footer = () => {
  return (
    <footer className='flexStart footer'>
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex items-start flex-col'>
                <Image
                    src="/logo-purple.svg"
                    width={115}
                    height={43}
                    alt="logo"
                />
                <p className="text-start text-sm font-normal mt-5 max-w-xs">
                    Flexible and powerful API to build your next project.
                </p>
            </div>
            <div className="flex flex-wrap gap-12">
                {footerLinks.map((column) => (
                    <FooterColumn title={column.title} links={column.links} key={column.title}/>
                ))}
            </div>
        </div>
        <div className="flexBetween footer_copyright">
            <p>@ 2023 Tutorial. All rights reserved</p>
            <p className='"text-gray'>
                <span className="text-primary">Terms of Service</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer