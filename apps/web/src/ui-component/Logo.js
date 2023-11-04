/* eslint-disable @next/next/no-img-element */
import logo from 'assets/images/outerbridge_brand.png'
import logoDark from 'assets/images/outerbridge_brand_white.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <Image
                style={{ objectFit: 'scale-down', height: 'auto', width: 100, paddingLeft: '20px' }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Weave'
            />
        </div>
    )
}

export default Logo
