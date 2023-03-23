import Image from "next/image"
import Link from "next/link"
import { FooterContainer, FooterSubText, FooterText, LogoContainer } from "./style"

const Footer = () => {
  return (
    <FooterContainer>
        <LogoContainer>
            <Link href="/">
                <Image src="/images/nextdex.png" alt="logo" width="100" height="30"/>
            </Link>
        <FooterText>
            <FooterSubText>
                Nextdex
            </FooterSubText>
            &copy; 2023
        </FooterText>
        </LogoContainer>
    </FooterContainer>
    )
}
export default Footer
